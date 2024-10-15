import B from './B'
import C from './C'
import React, {useReducer} from 'react'
export var countContext = React.createContext();

export default function A() {
 
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
  var [val, dispatch] = useReducer(countReducer, initialState)
  // console.log(val.count)
  return (
    
    <div>
      {/* <h2>A:{val.count}</h2> */}
      {/* <button onClick={dispach(increase())}>increase</button> */}
      <countContext.Provider value={{ val, dispatch}}   >
        <B />
        <C/>
    </countContext.Provider>
      
      </div>

  );
}
