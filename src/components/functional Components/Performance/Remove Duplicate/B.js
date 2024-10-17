import React from 'react'
import Usecount from './CustomHooks/Usecount'

function B() {
  
  var[count,Change]=Usecount()
  return (
    <div>B
      <h2>count:{count}</h2>
      <button onDoubleClick={() => { Change(count+1)}}>increse</button>
      <button onMouseOut={()=>{Change(count-1)}}>decrease</button>
    </div>
  )
}

export default B