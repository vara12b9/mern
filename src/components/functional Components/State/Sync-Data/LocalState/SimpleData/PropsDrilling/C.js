import React from 'react'
import H from './H'
import I from './I'

export default function C(props) {
  return (
    <div>
      C
      {/* <h1>name:{props.name}</h1> */}
      <hr></hr>
      <H />
      <hr></hr>
      <I name={props.name} setname={props.setname} />
    </div>
  );
}
