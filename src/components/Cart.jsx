import React, { useContext, useEffect } from 'react'
import { ItemContext } from '../context/CartContext'
import { EnviarOrden } from './EnviarOrden';

export const Cart = () => {
  const {cart, setCart} = useContext(ItemContext);

 

  const priceFormatter = (valor) =>{
    const formatter = new Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD'});
    return formatter.format(valor);
  }

  let ordenTotal = 0;

  const sumaDeValores = (objeto) => {
    let valorTotal = 0;
    objeto.forEach(item => {
      valorTotal += (item.quantity * item.price);
    })
    return valorTotal;
  }

  const deleteItem = (itemId) => {
    console.log('itemID: ',itemId);
    const itemIdIndex = cart.findIndex((item) => item.id === itemId);

    if (itemIdIndex > -1) {
      //const borrado = cart.splice(itemIdIndex, 1)
      const borrado = cart.filter((item) => item.id !== itemId)
        setCart([...borrado])
    }
    console.log('cart despues de borrado: ', cart);
  }
    

  return (
    <section className='container-fluid' style={{marginTop:'5em', marginBottom:'12em'}}>
    <div style={{width: '70%', margin: 'auto', height: '100vh'}}>
      <div className="p-5 h2">Cart Summary</div>
      <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col" style={{width: '90px'}}></th>
          <th scope="col" style={{width: '390px'}}>Producto</th>
          <th scope="col">Cant.</th>
          <th scope="col" style={{width: '100px'}}>Precio</th>
          <th scope="col" style={{width: '100px'}}>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {
            cart.map((item) => (<tr key={item.id}>
              <td scope="w-25">
                <img src={item.image} style={{width : '40px'}}/>
              </td>
              <td>{item.title}</td>
              <td>{item.quantity} x </td>
              <td>{priceFormatter(item.price)}</td>
              <td>{priceFormatter(item.total)}</td>
              <td><button className='btn btn-light' onClick={() => deleteItem(item.id)}><span className="material-symbols-outlined" style={{color:'red'}}>delete_forever</span></button></td>
            </tr>
            ))
          }
          <tr className="bg-secondary text-white">
            <td colSpan={4}>Total</td>
            <td>{priceFormatter(sumaDeValores(cart))}</td>
            <td></td>
          </tr>
      </tbody>
    </table>
        <EnviarOrden />
    </div>      
    </section>
  )
}
