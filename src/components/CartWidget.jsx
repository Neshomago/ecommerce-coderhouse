import React, { useContext, useEffect } from 'react'
import {ItemContext} from '../context/CartContext'

export const CartWidget = () => {
  const {cart, setCart} = useContext(ItemContext)
  
  useEffect(() => {
    console.log('cart update: ', cart.length);
  }, [cart])

  const cantidad = cart.length /* cart.reduce((acumulador, actual) => {
    return acumulador + actual.cantidad;
  }, 0) */;
  return (
    <div>
      <span className="material-symbols-outlined" style={{color:'white'}}>
      local_mall
      </span>
      <span className="badge badge-light cart-widget">{cantidad}</span>
    </div>
  )
}
