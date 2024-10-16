import React, { useState } from 'react'
import Profile from './Profile';
import Login from './Login';
function A() {
  var [login, setlogin] = useState(false)
  function ToggleLogin(a) {
    setlogin(a)
  }
  //if else
  // if (login) {
  //   return <Profile Toggle={ToggleLogin} />
  // }
  // else {
  //   return <Login Toggle={ToggleLogin} />
  // }
  //element variable
  // var data
  // if (login) {
  //   data = <Profile Toggle={ToggleLogin } />
  // } else {
  //   data = <Login Toggle={ToggleLogin} />
  // }
  // return data

  //ternary opertor
  
  // var data = login ? (
  //   <Profile Toggle={ToggleLogin} />
  // ) : (
  //   <Login Toggle={ToggleLogin} />
  // );
  // return data
  
  //short circuit
  var data = login && <Login Toggle={ToggleLogin} />
  return data

}

export default A