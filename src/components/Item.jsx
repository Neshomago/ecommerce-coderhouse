import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Contador } from './Contador'


export const Item = ({id, title, category, image, rating, price, stock}) => {

  const productoToCart = {
    id: id,
    image: image,
    title: title,
    price: price,
    stock: stock,
    quantity: ''
  }

  return (
        <div key={productoToCart.id} className='col'>
          <div className='card text-center shadow-sm' style={{width: '18rem', border: 'none'}}>
              <img className='card-img-top' src={productoToCart.image} style={{maxHeight:'250px', width:'12rem', alignSelf:'center'}}/>
              <div className='card-body'>
                  <h5 className='card-title'>{productoToCart.title}</h5>
                  <h4 className='card-subtitle'>$ {productoToCart.price}</h4>
                  <Link to={`/item/${productoToCart.id}`}>Más detalles</Link>
              </div>
              <div className='justify-content-center'>
                    <div className='m-2'><span className='badge badge-pill bg-success'>Stock disponible:</span> {productoToCart.stock}</div>
                    <Contador stock={productoToCart.stock}
                      id={productoToCart.id}
                      price={productoToCart.price}
                      title={productoToCart.title}
                      image={productoToCart.image}
                    />
              </div>
              <div className='card-footer'>
                  {rating} ⭐ | 🛍️ {category}
              </div>
          </div>
        </div>
  )
}
