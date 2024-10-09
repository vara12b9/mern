import React from 'react'

export default function Child2(props) {
  return (
    <React.StrictMode>
        <h1>Child2</h1>
        <button onClick={()=>props.data("Child2 data")}>child2-child1</button>
        </React.StrictMode>
  )
}
