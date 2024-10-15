import React,{useState} from 'react'

export default function F() {
  var [name,setname]=useState("sachin")
  return (
    <div>F:{name}
    <button onClick={()=>setname("kohli")}>update</button>
    </div>
  )
}
