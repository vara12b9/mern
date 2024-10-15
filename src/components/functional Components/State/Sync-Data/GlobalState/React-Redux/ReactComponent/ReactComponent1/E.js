import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../../../ToolKit/Slices/valCount/CakeSlice'
function E() {
  var value = useSelector((state) => {
    return state.cakeReducerFun.value
  })
  var dispach=useDispatch()
 
  return (
    <div>E
      <h1>cakeValue:{value}</h1>
      <button onClick={() => {
        dispach(increase())
      }}>increase</button>
      <button onClick={() => {
        dispach(decrease())
      }}>decrease</button>
    </div>
  )
}

export default E