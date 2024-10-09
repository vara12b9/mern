import { BUYCAKE } from "./cakeActionType"




var initialState = {
  noOfCake:100
}


export var cakeReducer = (state=initialState,action)=> {
  switch (action.type) {
    case BUYCAKE:
      return {
        noOfCake:initialState.noOfCake+1
      }
    default:
      return {
        initialState
      }
  }    
}