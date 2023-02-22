import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({id, title, category, image, description, rating, price}) => {
  return (
    <>
        <div className='d-flex p-2' style={{width: '30%'}} key={id}>
          <div className='card text-center'>
              <img className='card-img-top' src={image}/>
              <div className='card-body'>
                  <h5 className='card-title'>{title}</h5>
                  <h6 className='card-subtitle'>{price}</h6>
                  <p className='card-text'>{description}</p>
                  <Link to={`/item/${id}`}>Más detalles</Link>
              </div>
              <div className='card-footer text-muted'>
                  Rating {rating.rate}⭐ | Categoria {category}
              </div>
          </div>
        </div>
    </>
  )
}

/*             <div key={item.id} className='d-flex p-2'>
              <div className='card text-center'>
                  <img className='card-img-top' src={item.image}/>
                  <div className='card-body'>
                    <div className='card-header'>
                        <h1>{item.title}</h1>
                    </div>
                    <p>{item.description}</p>
                    <div>
                      <h3>{item.price}</h3>
                    </div>
                    <button >Ver detalles</button>
                  </div>
              </div>
            </div> */