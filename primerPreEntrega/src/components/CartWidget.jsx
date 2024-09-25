import React from 'react'
import cart from "../assets/cart.svg"

const CartWidget = () => {
  return (
    <>
    <img className='cart' src={cart} alt='cart'/>
    <span>{7}</span>
    </>
  )
}

export default CartWidget