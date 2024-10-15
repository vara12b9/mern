import React, {useReducer} from 'react'

export default function G() {
 
  
  var initialState = {
    count:0
  }

  var countReducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return {
          count: state.count + 1
        }
        break;
      case "decrease":
        return {
          count: state.count - 1
        }
        break;
      case "reset":
        return {
          count: state.count = 0
        }
        break;
      default:
        return {
          state
        }
    }
  }
  var [val, dispach] = useReducer(countReducer, initialState)
  console.log(val.count)
  return (
    
    <div>
      <h2>G:{val.count}</h2>
      {/* <button onClick={dispach(increase())}>increase</button> */}
      <button onClick={()=>{dispach({type:"increase"})}}>increase</button>
      <button onClick={()=>{dispach({type:"decrease"})}}>decrease</button>
      <button onClick={()=>{dispach({type:"reset"})}}>resent</button>
        {/* <button onClick={() => { update() }}>update</button> */}
        {/* <button onClick={() => setname("kohli")}>update</button> */}
      </div>

  );
}
