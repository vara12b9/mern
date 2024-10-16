import React from 'react'

function Profile(props) {
  return (
    <div>
      <div id='profile'>
        <h1>profile</h1>
        <h4>name:vara prasad</h4>
        <h4>age:22</h4>
        <p></p>
        <button onClick={()=>{props.Toggle(false);}}>logout</button>
      </div>
    </div>
  );
}

export default Profile