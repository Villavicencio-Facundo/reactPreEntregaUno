import React from 'react'
import Greeting from './Greeting'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <Greeting greeting={greeting}/>
    </div>
  )
}

export default ItemListContainer