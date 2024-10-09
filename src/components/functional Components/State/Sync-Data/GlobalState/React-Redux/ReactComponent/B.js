import React from 'react'
import { useSelector } from 'react-redux'

export default function B() {
  var d = useSelector((store) => {
    return store
  })
  console.log(d)
  
  return (
    <div>B
      {/* {d} */}
    </div>
  )
}
