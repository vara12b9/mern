import React from 'react'
// import { useState } from 'react';
export default function G(props) {
 
  return (
    <div>
      G
      <h1>value:{props.state.count}</h1>
      <button onClick={() => { props.dispach({ type: "increase" }) }}>increase</button>
      <button onClick={() => { props.dispach({type:"decrease"})}}>decrease</button>
    </div>
  );
}
