import React, { useEffect } from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../components/ItemDetail";

export const ItemDetailContainer = () => {
    const {id}= useParams();

    const getData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const datos = await response.json()
        const filtrado = datos.filter((item) => item.id == id);
        return filtrado;
    }

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        getData()
        .then((item) => setProducto(item));
    }, [])


    return (
    <ItemDetail producto={producto}/>
    )
}


