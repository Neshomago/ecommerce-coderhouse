import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'

export const Navbar = () => {
  return (
    <nav className="navbar w-100 navbar-expand-xl navbar-light sticky-menu bg-secondary">
        <div className="container-fluid">
            <div className="d-flex">
                <div className="p-1">
                    <img src="../src/assets/market.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                    <a className="navbar-brand text-light" href="/">MaxiKiosko</a>
                </div>
                <></>
                <div className='p-1'>
                    <a role="button" className="btn btn-secondary" href='/catalogo'>Catálogo</a>
                </div>
                <div className="p-1">
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
                </div>
                <div className="p-1">
                    <div className='btn btn-secondary'>
                        <Link to={'/cart'}>
                            <CartWidget></CartWidget>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
