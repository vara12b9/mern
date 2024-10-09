import { applyMiddleware, combineReducers, createStore } from 'redux'
import { countReducer } from './Count/countReducer'
import { cakeReducer } from './Cake/cakeReducer'
import logger from 'redux-logger'
import { ValReducer } from './Value/ValueReducer'


var rootReducer = combineReducers({
  countReducer: countReducer,
  cakeReducer: cakeReducer,
  ValReducer: ValReducer
})

var store = createStore(rootReducer,applyMiddleware(logger))

export default store