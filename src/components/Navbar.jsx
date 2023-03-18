import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light w-100 fixed-top bg-secondary">
            <div className="d-flex flex-md-row align-items-center px-md-4">
                <div className="p-2">
                    <Link className="navbar-brand text-light" to={"/"}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1040/1040254.png" alt="Logo" width="30" className="d-inline-block align-top p-1"/>
                        MaxiKiosko
                    </Link>
                </div>
                <nav className="p-2">
                    <Link className="btn btn-secondary" to={`/catalogo`}>Catálogo</Link>
                        <Link to={`categoria/${"men"}`}>
                            <button className="btn btn-secondary">Men</button>
                        </Link>
                        <Link to={`categoria/${"women"}`}>
                            <button className="btn btn-secondary">Women</button>
                        </Link>
                        <Link to={`categoria/${"jewelery"}`}>
                            <button className="btn btn-secondary">Jewelery</button>
                        </Link>
                        <Link to={`categoria/${"electronics"}`}>
                            <button className="btn btn-secondary">Electronics</button>
                        </Link>
                </nav>
                <div className="ml-auto p-2">
                    <div className='btn btn-secondary'>
                        <Link to={'/cart'}>
                            <CartWidget></CartWidget>
                        </Link>
                    </div>
                </div>
            </div>
    </nav>
  )
}
