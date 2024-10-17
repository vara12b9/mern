import React from 'react'
import ReactDOM from "react-dom"
import "./Style.css"
function Model(props) {
  return ReactDOM.createPortal(
    <div className='model-overlay'>
      <div className='content'>
        <h2>Model</h2>
        <h4>Model heading</h4>
        <h4>Model Body</h4>
        <p>PLOREN40</p>
        <button onClick={() => {props.ToggleDisplay();} } className='btn'>close </button>
      </div>
    </div>,document.getElementById('child')
  );
}

export default Model