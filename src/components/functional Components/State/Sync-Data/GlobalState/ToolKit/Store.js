//store
import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../../GlobalState/ToolKit/Slices/CountSlice/countSlice';

export var store = configureStore({
  reducer: {
    // root reducer it will hve multiple reducers
    ReducerFun: countReducer,
  },
});

