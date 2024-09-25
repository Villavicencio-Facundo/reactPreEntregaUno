import React from 'react'
import "../styles/navbar.css"
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
        <ul>
          <li><a className='active' href="">Inicio</a></li>
          <li><a href="">Informacion</a></li>
          <li><a href="">Productos</a></li>
          <li><a href="">Contacto</a></li>
          <CartWidget/>
        </ul>
  )
}

export default NavBar