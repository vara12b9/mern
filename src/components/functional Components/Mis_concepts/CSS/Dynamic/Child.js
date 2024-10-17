import React from 'react'

function Child(props) {
  return (
    <div>
      <button className={props.bcolor} onClick={()=>{props.changebtnfun()}}>
        childbutton
      </button>
    </div>
  );
}

export default Child