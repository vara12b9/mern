//store
import { configureStore } from '@reduxjs/toolkit';
import countReducer from './Slices/CountSlice/countSlice';
import cakeReducer from './Slices/valCount/CakeSlice'; 
import BookscakeReducer from './Slices/BookStore/BookStore';
export var store = configureStore({
  reducer: {
    // root reducer it will hve multiple reducers
    ReducerFun: countReducer,
    cakeReducerFun: cakeReducer,
    BooksReducerFun: BookscakeReducer
  },
});

