import React, { useContext } from 'react'
import {countContext} from "./A"
export default function M() {

  var { val, dispatch} = useContext(countContext)
  
  return (
    <div>
      <h2>M: count: {val.count}</h2>
      <button onClick={()=>{dispatch({type:"increase"})}}>increase</button>
        
   
      <button onClick={()=>{dispatch({type:"decrease"})}}>decrease</button>
      <button onClick={()=>{dispatch({type:"reset"})}}>reset</button>
    </div>
  );
}
