import React from 'react'
import Table from './Table';

function A() {
  var products=[{pid:1,pame:"apple"},{pid:2,pname:"banana"},{id:3,pname:"mango"}]
  return (
    <React.StrictMode key={1}>
      
        <h1>hai</h1>
      <h2>hello</h2>
      <Table/>
    </React.StrictMode>
  );
}

export default A