import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity,moneda, total } = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1>Carrito</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: {moneda}{total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link className="Button" to='/checkout' >Realizar Pedido</Link>
        </div>
    )
}

export default Cart