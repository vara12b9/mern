import React from 'react'
import Child from "./Child"
export default function Parent() { 
    var X="Parent data"
  return (

    <div>
      <h1>This is parent :{X}</h1>
      <Child data={X}/>
      </div>
  )
}
