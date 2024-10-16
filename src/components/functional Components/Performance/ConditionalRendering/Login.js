import React from 'react'

function login(props) {
  return (
    <div>
      <h2>login</h2>
      <div id='login'>
        <form>
          <div>
            <label htmlFor=''>name: </label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor=''>age: </label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor=''>password:</label>
            <input type='text' />
          </div>
          <button onClick={() => {props.Toggle(true)}}>login</button>
        </form>
      </div>
    </div>
  );
}

export default login