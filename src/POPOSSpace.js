// src/Project.js

import React from 'react'

function POPOSSpace(props) {
    const { name, image, address } = props
    return (
      <div>
        <h1>{name}</h1>
        <div>{address}</div>
        <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      </div>
    )
  }

export default POPOSSpace