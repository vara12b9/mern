import  { useState } from 'react'

function Usecount() {
  var [count, setCount] = useState(0);
  function Change(value) {
    setCount(value)
  }
  
  return [count,Change]
}

export default Usecount