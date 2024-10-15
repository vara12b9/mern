import React, {useState} from 'react'

export default function G() {
  // var x = 20
  var [name,setname]=useState("sachin")
  // function update() {
  //   console.log(x)
  //   x = 200
  //   console.log(x)
  // }
  return (
    <div>
      <h2>G:{name}</h2>
      {/* <button onClick={() => { update() }}>update</button> */}
      <button onClick={() => setname("kohli")}>update</button>
    </div>
  );
}
