import ItemCount from "../ItemCount/ItemCount"

const ItemDetail= ({  id, name, category, img, price, description, stock }) => {
    return(
        <article>
            <img src={img} style={{width: 200}} />
            <h3>{name}</h3>
            <h4>categoria: {category}</h4>
            <h4>{price}</h4>
            <h4>Destripcion del producto: {description}</h4>
           <ItemCount stock={stock} />
        </article>
    )
 }

 export default ItemDetail