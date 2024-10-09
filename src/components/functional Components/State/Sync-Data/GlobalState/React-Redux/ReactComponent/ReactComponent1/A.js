import React from 'react'
// import B from './B'

import {Provider} from "react-redux"
import { store } from '../../../ToolKit/Store'
import D from './D';

function A() {
  console.log("hello from A")
  return (
    <div>
      A
      
      
      <Provider store={store}>
      
       <D/>
      </Provider>
      
    </div>
  );
}

export default A