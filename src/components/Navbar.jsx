import React from 'react'
import { CartWidget } from './CartWidget'

export const Navbar = () => {
  return (
    <nav className="navbar w-100 navbar-expand-xl navbar-light sticky-menu bg-secondary">
        <div className="container-fluid">
            <div className="d-flex">
                <div className="p-1">
                    <img src="../src/assets/market.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                    <a className="navbar-brand text-light" href="#">MaxiKiosko</a>
                </div>
                <div className="p-1">
                    <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                        <li className='nav-item'><a className="nav-link text-light" href="#">Caramelos</a></li>
                        <li className='nav-item'><a className="nav-link text-light" href="#">Chocolates</a></li>
                        <li className='nav-item'><a className="nav-link text-light" href="#">Bebidas</a></li>
                    </ul>
                </div>
                <div className="p-1">
                    <CartWidget></CartWidget>
                </div>
            </div>
        </div>
    </nav>
  )
}
