import React from 'react'
import Usecount from './CustomHooks/Usecount'

function C() {
var [count,Increase,Decrease]=Usecount()
  return (
    <div>C
      <h2>data:{count}</h2>
      <button onMouseMove={() => { Increase() }}>increase</button>
      <button onMouseOver={()=>{Decrease()}}>decrease</button>
    </div>
  )
}

export default C