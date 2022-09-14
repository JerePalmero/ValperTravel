import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import NotificationContext from '../../notification/Notification'

const ItemDetail = ({ id, title, img, category, descripcion, moneda, price, stock }) => {
   
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const quantityAdded = getProductQuantity(id)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setNotification('error', `Se agregaron ${quantity} ${title}`)
        setQuantity(quantity)
        addItem({id, title, img, category, descripcion, moneda, price, stock, quantity})
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture>
                <img src={img} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                     {category}
                </p>
                <p className="Info">
                    {descripcion}
                </p>
                <p className="Info">
                {moneda} {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                { quantity > 0  
                    ? <Link to='/cart' className='Option'>Hacer Reserva</Link> 
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={quantityAdded}/>}
            </footer>
        </article>
    )
}

export default ItemDetail