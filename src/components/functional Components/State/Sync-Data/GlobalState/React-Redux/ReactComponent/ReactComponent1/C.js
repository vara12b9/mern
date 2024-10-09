import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseval, increaseval } from '../../Redux/Value/ValueAction';
import D from './D';

function C() {
  var data = useSelector((state) => {
    return state.ValReducer.val;
  });
  console.log(data)
  var dispach=useDispatch()
  return (
    <div>C
      <h1>value:{data}</h1>
      <button onClick={() => { dispach(increaseval()) }}>increaseval</button>
      <button onClick={() => dispach(decreaseval())}>decreaseval</button>
      <D/>
    </div>
  )
}

export default C