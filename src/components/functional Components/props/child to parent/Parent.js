import React,{useState} from 'react'
import Child from './Child'
export default function Parent() {
    var [x, setx]=useState()
    function Test(a){
        console.log("test",a)
        setx(a)
    }
  return <React.Fragment>
    <div>Parent</div>
    <h1>Parent:{x}</h1>
    <Child test={Test}/>
    </React.Fragment>
}
