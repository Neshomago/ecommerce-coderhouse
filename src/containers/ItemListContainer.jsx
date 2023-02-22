import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../components/ItemDetail'
import { ItemList } from '../components/itemList'

export const ItemListContainer = () => {
  const { categoria } = useParams();
  
  const API = 'https://fakestoreapi.com/products'

  const getProductos = async () => {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  }

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
    .then((item) => setProductos(item));
  },[])


  const filtrado = (array, categoria) => {
    let listaFiltrada = [];
    array.filter((item) =>{
      if (item.category === "men's clothing" && categoria == 'men') {
        listaFiltrada.push(item);
      } else if (item.category == "women's clothing" && categoria == 'women') {
        listaFiltrada.push(item);
      } else if (item.category == "electronics" && categoria == 'electronics') {
        listaFiltrada.push(item);
      } else if (item.category == "jewelery" && categoria == 'jewelery') {
        listaFiltrada.push(item);
      }
    })
    return listaFiltrada;
  }

  if (categoria === undefined) {
      return (
      <section>
          { 
            productos == [] ? (
              <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              </div>
            ) : (<div></div>)
            }
          <ItemList  className='flex-wrap p-2' productos={productos}/>
    </section> )
    } else {
      //let categoryFilter = categorias.filter((x) => x === categoria)
      console.log(categoria);
      console.log(filtrado(productos));
      return (
        <section>
              {categoria ? <ItemList className='flex-wrap p-2' productos={filtrado(productos, categoria)} /> : <ItemList  className='flex-wrap p-2' productos={productos}/>}
        </section> )
  }
}
