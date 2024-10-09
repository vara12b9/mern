import React from 'react'
export default function M(props) {
  return (
    <div>M
      <h1>name:{props.name}</h1>
      <button onClick={()=>props.setname("kohili")}>update</button>
      {/* <button onClick={()=>setname("kohli")}>update</button> */}
    </div>
  )
}
