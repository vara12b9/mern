import React,{useState} from 'react'
import F from './F'
import G from './G'

export default function D() {
  var [name, setname] = useState('sachin');
  return (
    <div>D
      <h1>name:{name}</h1>
      <F name={name} setname={setname} />
      <G name={name} setname={setname} />
    </div>
  )
}
