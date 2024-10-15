import React,{useReducer} from 'react'

export default function F() {
  var value = {
   number:0
  }
  var countChanger = (state, action)=>{
    switch (action.type) {
      case "increase":
        return {
          number:state.number+1
        }
        break;
      default:
        return state
      
    }
    
  }
  var [initialState,dispach]=useReducer(countChanger,value)
  return (
    <div>
      <h1> F val:{initialState.number}</h1>
      <button onClick={() => { dispach({ type: "increase" }) }}>increase</button>
    {/* <button onClick={()=>setname("kohli")}>update</button> */}
    </div>
  )
}
