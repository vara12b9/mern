import React from 'react'
import B from './B'
import C from './C'
import Usecount from './CustomHooks/Usecount'

function A() {
  // var [count,setCount]=useState(0)
  var [count,Change]=Usecount()
  return (
    <div>A
      <h1>count:{count}</h1>
      <button onClick={() => { Change(count+1) }}>increase</button>
      <button onMouseEnter={()=>{Change(count-1)}}>decrease</button>
      <B />
      <C/>
    </div>
  )
}

export default A