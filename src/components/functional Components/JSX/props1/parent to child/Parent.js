import React from 'react'
import Child from "./Child"
export default function Parent() {
    var X="hey hi this is parent data"
  return (
    <div>
        <h1>This is parent component</h1>
        {X}
        <Child data={X}/>
    </div>
  )
}
