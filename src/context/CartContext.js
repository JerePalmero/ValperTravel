import { useState, useEffect, useRef, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    const countRendersRef = useRef(0)

    useEffect(() => {
        console.log(countRendersRef.current)
        if(countRendersRef.current > 0 ) {
            console.log('despues del primer render')
            console.log(countRendersRef.current)
            let totalQuantity = 0;
            let total = 0
            cart.forEach(prod => {
                totalQuantity += prod.quantity
                total += prod.quantity * prod.price
            });
    
            setTotalQuantity(totalQuantity)
            setTotal(total)
        } else {
            console.log('primer render')
        }
        countRendersRef.current++
    }, [cart])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const inCart = cart.find (prod => prod.id === productToAdd.id);
            inCart.quantity +=productToAdd.quantity;
            setCart([...cart])
           }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
    }

    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, removeItem, clearCart, getProductQuantity, totalQuantity, total }}>
            {children}
        </CartContext.Provider> 
    )
}


