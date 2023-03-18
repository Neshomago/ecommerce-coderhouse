import React, { useCallback, useContext, useState } from 'react'
import { ItemContext } from '../context/CartContext';

export const Contador = ({ stock, id, price, title, image }) => {
  const [contando, setContador] = useState(0);
  const {cart, setCart}= useContext(ItemContext)

  const increment = useCallback(() => {
    setContador((prev) => prev + 1)
  }, []);

  const decrement = () => {
      if (contando <= 0 ) {
          reset()
      } else {
        setContador((prev) => prev - 1);
      }
  }

  const reset = () => {
      setContador(0)
  }

  const bodyProducto = {
    id: id,
    image: image,
    quantity: contando,
    price: price,
    title: title,
    total: price * contando
  }

  const addToCart = (productoContado) => {
    setCart([...cart,
      {
      id: productoContado.id,
      image: productoContado.image,
      quantity: productoContado.quantity,
      price: productoContado.price,
      title: productoContado.title,
      total: productoContado.price * productoContado.quantity
    }
    ])
    reset();
  }

  return (
    <div style={{width: '18rem', margin: 'auto'}}>
      <div className="input-group align-self-center">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={decrement}>-</button>
        </div>
          <button placeholder='Cantidad:'
          type="number"
          className="form-control"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          onClick={() => addToCart(bodyProducto)}
          disabled={contando == 0}>Añadir {contando} al carrito</button>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary"
            type="button"
            id="inputGroupFileAddon04"
            onClick={increment}
            disabled={stock <= contando}>+</button>
        </div>
      </div>
    </div>
  )
}
