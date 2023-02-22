import React from 'react'

export default function Cart() {
  return (
    <div style={{width: '70%', margin: 'auto', height: '100vh'}}>
        <div className="mb-3">
        <label htmlFor="Input1" className="form-label">Dirección Email</label>
        <input type="email" className="form-control" id="Input1" placeholder="nombre@correo.com" />
        </div>
        <div className="mb-3">
        <label htmlFor="Textarea1" className="form-label">Escriba sus comentarios aquí</label>
        <textarea className="form-control" id="Textarea1" rows="3"></textarea>
        </div> 
    </div>
  )
}
