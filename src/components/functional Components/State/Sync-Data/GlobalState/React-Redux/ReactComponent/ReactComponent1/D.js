import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../../../ToolKit/Slices/CountSlice/countSlice';
function D() {
  var data = useSelector((state) => {
    return state.ReducerFun.count;
  });
  var dispach=useDispatch()

  return (
    <div>D
      <h1> this is from tool Selector:{data}</h1>
      <button onClick={()=>{dispach(increase())}}>increase</button>
      <button onClick={()=>{dispach(decrease())}}>decrease</button>
    </div>
  )
}

export default D