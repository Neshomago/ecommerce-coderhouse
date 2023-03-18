import React from 'react'
import { Link } from 'react-router-dom'

const BannerCuadrado = ({titulo="Special Offer Coderhouse", texto = "Con nuevas propuestas para el coder fashion", color, ruta, seccion}) => {
  return (
    <div className={`card ${color}`}>
            <div className='card-body'>
              <h5 className='card-title'>{titulo}</h5>
              <p className="card-text">{texto}</p>
              <Link to={ruta}>Ir a sección {seccion}</Link>
            </div>
    </div>    
  )
}

export default BannerCuadrado