import React from 'react'
import J from './J'
import K from './K'

export default function I(props) {
  return (
    <div>
      I
      {/* <h1>name:{props.name}</h1> */}
      <hr></hr>
      <J name={props.name} setname={props.setname} />
      <hr></hr>
      <K />
    </div>
  );
}
