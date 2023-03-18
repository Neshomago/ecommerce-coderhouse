import { createContext, useState } from "react";

export const ItemContext = createContext()

const CartContext = ({ children }) => {
    const [cart, setCart] = useState([])

    /*  addItem(item, quantity)
        removeItem(itemId)
        clear() // remove items
        isInCart(id) => true/false */
    return (
        <ItemContext.Provider value={{cart, setCart}}>
        {children}
        </ItemContext.Provider>
    )

}

export default CartContext