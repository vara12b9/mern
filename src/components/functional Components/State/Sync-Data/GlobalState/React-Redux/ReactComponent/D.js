import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCount, increaseCount } from '../Redux/Store'
  
export default function D() {     
  var store=useSelector((state) => {
    return state.count
    
  })

  // console.log(store)
  var dispach =useDispatch()
  return (
    <div>D
      <h2>count:{store}</h2>
      <button onClick={()=> dispach(increaseCount())}>increase</button>
      <button onClick={()=> dispach(decreaseCount())}>decrease</button>
    </div>
  )
}
