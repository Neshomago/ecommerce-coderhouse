import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from '../components/itemList'
import { collection, getDocs, getFirestore} from "firebase/firestore";
import LoadingSpinner from '../components/LoadingSpinner';

export const ItemListContainer = () => {
  const { categoria } = useParams();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "tienda");
        setLoading(true);
        getDocs(itemsCollection).then((snapshot) => {
          const docs = snapshot.docs.map((doc) => (
                {...doc.data(),
                  id: doc.id,
                }
              ));
          setLoading(false);
          setProductos(docs);
        });
      }, []
  );

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

  return (
    <section className='container-fluid mb-3' style={{marginTop:'5em'}}>
    <div className='container'>
        <div className='row align-items-center g-3'>
          {
            categoria === undefined ?
              loading ? <LoadingSpinner /> : 
              (
                <>
                <img src='../src/assets/images-1.png' style={{width: '100%'}} />
                <h2>Productos del catálogo</h2>
                <ItemList productos={productos}/>
                </>
              )
            :
              categoria
                  ? (
                    <>
                    <h2>Productos de categoría {categoria}</h2>
                    <ItemList productos={filtrado(productos, categoria)} />
                    </>
                    )
                  : (
                    <>
                    <h2>Productos de categoría {categoria}</h2>
                    <ItemList productos={productos}/>
                    </>
                  )
          }
        </div>
    </div>
    </section> )
}
