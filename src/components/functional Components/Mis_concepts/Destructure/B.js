import React from 'react'

function B(props) {
  console.log(props)
  var {coun}=props.data
  return (
    <div>B
      <h1>count:{props.data.value}</h1>
      <h1>count:{coun}</h1>
    </div>
  )
}

export default B