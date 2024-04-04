const products = [
    { 
        id: '1', 
        name: 'HOPE ANGELS', 
        price: '$11.000', 
        category: 'Remeras', 
        img:'https://i.imgur.com/gidsc2l.jpg', 
        stock: 1, 
        description:'Detalle'
    },
    
    { id: '2', name: 'REMINDER', price: '$11.000', category: 'Remeras', img:'https://i.imgur.com/wLQXx1N.jpg', stock: 1, description:'Detalle'},
    
    { id: '3', name: 'CREATIVE DIVISION', price: '$11.000', category: 'Remeras', img:'https://i.imgur.com/uwA4WPV.jpg', stock: 1, description:'Detalle'},
    
    { id: '4', name: 'VANS', price: '$9.000', category: 'Remeras', img:'https://i.imgur.com/iNA5SAC.jpg', stock: 1, description:'Detalle'},

    { id: '5', name: 'HAND  EYE', price: '$11.000', category: 'Remeras', img:'https://i.imgur.com/5iNVhza.jpeg', stock: 1, description:'Detalle'},

    { id: '6', name: 'M$UP', price: '$11.000', category: 'Remeras', img:'https://i.imgur.com/hw4KPFH.jpeg', stock: 1, description:'Detalle'},

    { id: '7', name: 'BUZO HOLLISTER BORDADO', price: '$23.000', category: 'Buzos', img:'https://i.imgur.com/jSfDwU2.jpeg', stock: 1, description:'Detalle'},

    { id: '8', name: 'BUZO RUSTICO HOLLISTER', price: '$23.000', category: 'Buzos', img:'https://i.imgur.com/0wiwsbz.jpeg', stock: 1, description:'Detalle'},

    { id: '9', name: 'BUZO HOLLISTER BORDADO', price: '$23.000', category: 'Buzos', img:'https://i.imgur.com/Bms5jEL.jpeg', stock: 1, description:'Detalle'},

    { id: '10', name: 'BUZO THE NORTH FACE', price: '$23.000', category: 'Buzos', img:'https://i.imgur.com/1cmzYc9.jpeg', stock: 1, description:'Detalle'},

    { id: '11', name: 'COLE BUXTON', price: '$11.000', category: 'Remeras', img:'https://i.imgur.com/DT3IGKK.jpeg', stock: 1, description:'Detalle'},

    { id: '12', name: 'QUICKSILVER', price: '$11.000', category: 'Remeras', img:'https://i.imgur.com/f5UxE8G.jpeg', stock: 1, description:'Detalle'},

    { id: '13', name: 'DISTORSION', price: '$11.000', category: 'Remeras', img:'https://i.imgur.com/Fmb3Sm6.jpeg', stock: 1, description:'Detalle'},

    { id: '14', name: 'STREETS', price: '$11.000', category: 'Remeras', img:'https://i.imgur.com/SvMEDjW.jpeg', stock: 1, description:'Detalle'},

    { id: '15', name: 'BREAK CONVENTIONS', price: '$11.000', category: '  Remeras', img:'https://i.imgur.com/vsFbiIW.jpeg', stock: 1, description:'Detalle'},

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}