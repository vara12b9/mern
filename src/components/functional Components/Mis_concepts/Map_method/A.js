import React, { useState } from 'react'

function A() {
  var [produts,setProduct] =useState([
    { pname: 'apple', price: 20, Quantity: 100 },
    { pname: 'banana', price: 20, Quantity: 10 },
    { pname: 'orange', price: 20, Quantity: 50 },
    { pname: 'pineapple', price: 20, Quantity: 80 },
  ]);

  return (
    <div>
      A
      {/* <h1>
        product1:{produts[0].pname}
        <br></br>
        {produts[0].price}
        <br></br> {produts[0].Quantity}
      </h1>
      <h1>
        product2:{produts[1].pname}
        <br></br>
        {produts[1].price}
        <br></br> {produts[1].Quantity}
      </h1>
      <h1>
        product3:{produts[2].pname}
        <br></br>
        {produts[2].price}
        <br></br> {produts[2].Quantity}
      </h1> */}
      {
        produts.map((produts) => {
          return (
            <>
              <h2>name:{produts.pname}</h2>
              <h2>price:{produts.price}</h2>
              <h2>price:{produts.Quantity}</h2>
            </>
          );
        })
      }
    </div>
  );
}

export default A