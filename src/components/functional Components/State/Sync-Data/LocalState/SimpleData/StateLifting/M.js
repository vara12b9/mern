import React, {useState} from 'react'

export default function M() {
   var [name, setname] = useState('sahin');
  return (
    <div>M
      <h1>name:{name}</h1>
      <button onClick={()=>setname("kohli")}>update</button>
    </div>
  )
}
