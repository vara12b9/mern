import React,{useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
export default function Parent() {

    var [x, setx]=useState(1000)
    function Hello(d){
        console.log(d)
        setx(d)
    }
  return (
    <React.StrictMode>
        <h1>This is Parent</h1>
        <Child2 data={Hello}/>
        <Child1 a={x}/>
        </React.StrictMode>
  )
}
