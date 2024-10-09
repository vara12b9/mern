import React from 'react'

export default function Child(props) {
    console.log(props)
  return <div>
    <h1>Child</h1>
    <button onClick={()=>{
        return props.test("child data")}}>click</button>
    {/* <button onClick={props.text}>Send data to parent </button> */}
    </div>
}
