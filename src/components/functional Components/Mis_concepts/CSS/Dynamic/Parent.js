import React, { useState } from 'react'
import Child from './Child'
import "./Styles.css"
import Hello from './Hello'
function Parent() {
  var [bgcolor, changebgcolor] = useState(false)
  var btnclass = bgcolor ? 'btn1' : "btn2"
  var changebtnfun = () => {
    changebgcolor(!bgcolor)
  }
  return (
    <div>
      Parent
      <button onClick={changebtnfun} className={btnclass}>
        click
        {/* <Child/> */}
      </button>
      <Child bcolor={btnclass} changebtnfun={changebtnfun} />
      <Hello/>
    </div>
  );
}

export default Parent