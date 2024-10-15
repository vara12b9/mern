import React,{useState} from 'react'
import B from './B'
import C from './C'

export default function A() {
  var [name,setname]=useState("sachin")
  return (
    <div>A
       <h1>name:{name}</h1> 
       <button onClick={()=>setname("kohli")}>update</button> 
      <B name={name} />
      <C name={name} />
    </div>
  )
}
