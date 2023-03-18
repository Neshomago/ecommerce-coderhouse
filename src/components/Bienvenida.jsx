import React from 'react'
import BannerCuadrado from './BannerCuadrado'


export const Bienvenida = () => {
  return (
    <section className='container' style={{marginTop:'5em', marginBottom:'5em'}}>
      <div className='row'>
          <img src="https://template.hasthemes.com/shopick-v1/shopick/img/slider/slider-1/3.jpg" className="card-img"/>
      </div>
      <div className='row m-5'>
        <div className='col'>
          <BannerCuadrado color={'bg-info'} ruta={'/categoria/men'} seccion={'hombres'} titulo={'Calidad para hombres'}/>
        </div>
        <div className='col'>
          <BannerCuadrado color={'bg-light'} ruta={'/categoria/women'} seccion={'mujeres'} titulo={'Belleza femenina'}/>
        </div>
        <div className='col'>
          <BannerCuadrado color={'bg-info'} ruta={'/categoria/jewelery'} seccion={'Joyeria'}/>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
            <img src='../src/assets/banner-top2.png' style={{width: '100%'}} />
        </div>
        <div className='col'>
            <img src='../src/assets/banner-top4.png' style={{width: '100%'}} />
        </div>
        <div className='row'>
          <div className='col'>
              <img src='../src/assets/banner-top3.jpg' style={{width: '100%'}} />
          </div>
        </div>
      </div>
    </section>
  )
}
