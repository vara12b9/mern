import React, { useState } from 'react'
import Model from './Model'

function Parent() {
  var [display, setdisplay] = useState(false)
  function ToggleDisplay() {
    setdisplay(!display)
  }
  return (
    <div id="parent">
      {!display && <button onClick={() => { ToggleDisplay() }}>open model</button>}
      {display && <Model  ToggleDisplay={ToggleDisplay} />}
    </div>
  )
}

export default Parent