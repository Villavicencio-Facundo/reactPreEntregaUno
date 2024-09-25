import React from 'react'
import '../styles/greeting.css'

const Greeting = ({greeting}) => {
  return (
    <>
    <h1>RIFFS</h1>
    <h2>{greeting}</h2>
    </>
  )
}

export default Greeting