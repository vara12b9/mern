import React, { useContext } from 'react'
import { x } from './A'
// console.log(x._currentValue)
// console.log(x._currentvalue)
export default function M() {
  // console.log(x._currentValue)
  var name=useContext(x)
  return (
    <div>M
      <h1>{name}</h1>
      <h1>{x._currentvalue}</h1>
      
    </div>
  )
}
