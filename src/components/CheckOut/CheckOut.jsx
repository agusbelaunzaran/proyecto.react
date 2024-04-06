import React, { useState, useContext } from 'react';
import './CheckOut.css'
import { CartContext } from '../CartContext/CartContext';
import { db } from '../../services/firebase/firebaseConfig';
import { writeBatch, collection, addDoc, getDocs, documentId, query, where } from 'firebase/firestore';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [error, setError] = useState(null);
    const { cart, total, clearCart } = useContext(CartContext);

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        confirmEmail: '',
        phone: '',
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const createOrder = async () => {
        try {
            setLoading(true);
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids));
            const querySnapshot = await getDocs(productsCollection);
            const { docs } = querySnapshot;

            docs.forEach(doc => {
                const data = doc.data();
                const stockDb = data.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...data });
                }
            });

            if (outOfStock.length === 0) {
                if (userData.email !== userData.confirmEmail) {
                    setError('Los correos electrónicos ingresados no coinciden.');
                    setLoading(false);
                    return;
                }

                const objOrder = {
                    buyer: userData,
                    items: [],
                    total: 0
                };

                const orderCollection = collection(db, 'orders');
                const { id } = await addDoc(orderCollection, objOrder);

                batch.commit();
                clearCart();
                setOrderId(id);
            } else {
                console.error('Hay productos que no tienen stock disponible');
            }
        } catch (error) {
            console.error('Hubo un error en la generación de la orden:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Su orden está siendo generada...</h1>;
    }

    if (orderId) {
        return (
            <div className="order-confirmation">
                <h1>Gracias por su compra</h1>
                <p>El ID de su orden es: {orderId}</p>
            </div>
        );
    }

    return (
        <div className="form-container">
            <h1 className='checkout'>Checkout</h1>
            {error && <p className="error-message">{error}</p>}
            <form>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Correo electrónico:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Confirmar Correo electrónico:</label>
                    <input
                        type="email"
                        name="confirmEmail"
                        value={userData.confirmEmail}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Teléfono:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="submit-button" type="button" onClick={createOrder}>
                    Generar orden de compra
                </button>
            </form>
        </div>
    );
};

export default Checkout;