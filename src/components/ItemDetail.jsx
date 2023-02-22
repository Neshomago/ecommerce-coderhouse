import React from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetail = ({producto}) => {
    const {id} = useParams();
    const productFilter = producto.filter((item) => item.id === id);
    console.log('id:', id)
    console.log('productoFilter: ', productFilter);
    console.log('producto: ', producto);

  return (
    <>
        {producto.map((item) => 
          <div className='d-flex p-2' style={{width: '30%'}} key={item.id}>
          <div className='card text-center'>
              <img className='card-img-top' src={item.image}/>
              <div className='card-body'>
                  <h5 className='card-title'>{item.title}</h5>
                  <h6 className='card-subtitle'>{item.price}</h6>
                  <p className='card-text'>{item.description}</p>
                  <button>Comprar Producto</button>
              </div>
              <div className='card-footer text-muted'>
                  Rating {item.rating.rate}⭐ | Categoria {item.category}
              </div>
          </div>
        </div>
        )}
    </>
  )
}
