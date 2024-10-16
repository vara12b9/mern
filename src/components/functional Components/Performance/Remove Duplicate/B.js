import React from 'react'
import Usecount from './CustomHooks/Usecount'

function B() {
  
  var[count,Increase,Decrease]=Usecount()
  return (
    <div>B
      <h2>count:{count}</h2>
      <button onDoubleClick={() => { Increase()}}>increse</button>
      <button onMouseOut={()=>{Decrease()}}>decrease</button>
    </div>
  )
}

export default B