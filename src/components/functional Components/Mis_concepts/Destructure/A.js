import React, { useState } from 'react'
import B from './B'

function A() {
  // var [count,setcount]=useState(0)
  var [count, setcount] = useState({ value: 0 })
  var {value}=count
  return (
    <div>
      A<h2>count:{value}</h2>
      <h2>count:{count.value}</h2>   
      {/* <h2>count:{count.value}</h2> */}
      <B data={count} />
    </div>
  );
}

export default A