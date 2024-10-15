import React, { useState } from 'react'
// import { useContext } from 'react'
import B from './B'
import C from './C'

var x = React.createContext("sachin")
console.log(x._currentValue)
export default function A() {
  // var [a, setA] = useState("sachin")
  var [count,setCount]=useState("sachin")
  return (
    <div>
      A<h1>count:{count}</h1>
      <h1>{x._currentValue}</h1>
      <button onClick={() => setCount('kohli')}>click</button>
      <hr></hr>
      <x.Provider value={count}>
        <B />
        <hr></hr>
        <C />
        <h1>x._currentValue</h1>
      </x.Provider>
    </div>
  );
}
export {x}