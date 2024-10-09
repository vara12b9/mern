import React from 'react'

export default function Child1(props) {
    
  return (
    <div>
        <h1>This is child 1</h1>
        <h1>This is from child2:{props.a}</h1>
        
        </div>
  )
}
