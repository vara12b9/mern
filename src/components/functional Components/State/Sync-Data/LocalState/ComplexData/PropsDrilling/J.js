import React from 'react'
import L from './L'
import M from './M'
export default function J(props) {
  return (
    <div>J
      <hr></hr>
      <L />
      <hr></hr>
      <M name={props.name} setname={props.setname} />
    </div>
  )
}
