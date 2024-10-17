import React from 'react'
import Usecount from './CustomHooks/Usecount'

function C() {
var [count,Change]=Usecount()
  return (
    <div>C
      <h2>data:{count}</h2>
      <button onMouseMove={() => { Change(count+1)}}>increase</button>
      <button onMouseOver={()=>{Change(count-1)}}>decrease</button>
    </div>
  )
}

export default C