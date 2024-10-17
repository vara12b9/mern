import React from 'react'
function Inline() {
    var obj = { color: 'orange', fontSize: '100px' };

  return (
    
    <div>
      <h1 style={obj}>hai</h1>
      <h2 style={{ color: 'red',fontSize:"100px" }}>hello</h2>
    </div>
  )
}

export default Inline