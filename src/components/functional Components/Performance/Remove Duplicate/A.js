import React from 'react'
import B from './B'
import C from './C'
import Usecount from './CustomHooks/Usecount'

function A() {
  // var [count,setCount]=useState(0)
  var [count,Increase,Decrease]=Usecount()
  return (
    <div>A
      <h1>count:{count}</h1>
      <button onClick={() => { Increase() }}>increase</button>
      <button onMouseEnter={()=>{Decrease()}}>decrease</button>
      <B />
      <C/>
    </div>
  )
}

export default A