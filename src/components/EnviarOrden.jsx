import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "../context/CartContext";
import LoadingSpinner from "./LoadingSpinner";


export const EnviarOrden = ({carrito}) => {
    const [ ordenId, setOrdenId ] = useState(null);
    const {cart, setCart}= useContext(ItemContext)
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ loading, setLoading ] = useState(false);
    
    const submitHandler = (e) => {
        e.preventDefault();
        
        if (name === "" || email === "" || phone === "" || cart.length === 0) {
            Swal.fire({
                title: 'Error!',
                text: 'No pueden existir campos vacíos ni el carrito vacío',
                icon: 'error',
                confirmButtonText: 'Comprendo'
            })
        } else {
            generarOrden(ordenData);
        }
    }

    const sumaDeValores = (objeto) => {
        let valorTotal = 0;
        objeto.forEach(item => {
          valorTotal += (item.quantity * item.price);
        })
        return valorTotal;
      }
    
    const ordenData = {
        userData: {
            name, email, phone
        },
        orderData: {
            cart
        },
        orderTotal: sumaDeValores(cart)
    }

    const generarOrden = (orden) => {
        const db = getFirestore();
        const orderCollection = collection(db, 'ordenes');
        setLoading(true);
        addDoc(orderCollection, orden).then(data => {
            setOrdenId(data.id);
            setLoading(false);
        })
        setCart([]);
    }

    return (
      <div>
        {loading ?
            <LoadingSpinner style={{minHeight:'1vh !important', marginBottom:'1em'}}/>
            : 
                ordenId ? (
                <>
                    <div className="alert alert-success" role="alert">
                        La orden {ordenId} se ha enviado correctamente
                    </div>
                    <Link className="btn btn-outline-success" style={{width:'70%'}} to={"/"}>Regresar a comprar 🛒</Link>
                </>
                ) : (
                    <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="Input1" className="form-label">
                        Dirección Email
                        </label>
                        <input
                        type="email"
                        className="form-control"
                        id="Input1"
                        placeholder="nombre@correo.com"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Input2" className="form-label">
                        Nombres
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="Input2"
                        placeholder="Tu nombre completo"
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Input3" className="form-label">
                        Celular
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="Input3"
                        placeholder="Tu número celular"
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <button type="text" className="btn-default" id="Input4">
                        Generar orden ⚡️
                        </button>
                    </div>
                    </form>
                )}
      </div>
    );
}