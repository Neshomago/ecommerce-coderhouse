import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { Contador } from './Contador'
import {ItemContext} from '../context/CartContext'

export const ItemDetail = ({producto}) => {
    const {id} = useParams();
    const { cart, setCart } = useContext(ItemContext);

    const [product, setProducto] = useState([]);

    useEffect(() => {
      const db = getFirestore();

      const productId = doc(db, "tienda", `${id}`);

      getDoc(productId).then((snapshot) => {
        if (snapshot.exists()) {
          setProducto(snapshot.data());
        } else {
          console.log("No existe el producto");
        }
      })
    }, []);


  return (
    <>
          <div className='container'>
            <div className='row justify-content-md-center'>
              <div className='col col-lg-3'>
                <div className='card' style={{border: 'none'}}>
                  <img className='card-img-top' src={product.image} />
                </div>
              </div>

              <div className='col col-lg-5'>
                <div className='card text-center shadow-lg' style={{border: 'none'}}>
                    <div className='card-body'>
                        <h5 className='card-title'>{product.title}</h5>
                        <h4 className='card-subtitle'>$ {product.price}</h4>
                        <p className='card-text'>{product.description}</p>
                        <div>
                        <div className='m-2'><span className='badge badge-pill bg-success'>Stock disponible:</span> {product.stock}</div>
                          <Contador stock={product.stock}
                          id={id}
                          price={product.price}
                          title={product.title}
                          image={product.image}
                          />
                        </div>
                    </div>
                    <div className='card-footer'>
                        {product.category}
                    </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
