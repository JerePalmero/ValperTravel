
import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { getQuantity, totalQuantity } = useContext(CartContext)

    // const quantity = getQuantity()
  

    return(
        <Link to='/cart' className="CartWidget">
            <img src="/images/carrito.png" alt='cart-widget' className='CartImg'/>
            {totalQuantity}
        </Link>
    );
}

export default CartWidget