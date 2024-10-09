import { configureStore } from "@reduxjs/toolkit"
import countReducer from "../../Store"

export var store = configureStore({
  reducer: {              // root reducer it will hve multiple reducers
    ReducerFun:countReducer
  }
})