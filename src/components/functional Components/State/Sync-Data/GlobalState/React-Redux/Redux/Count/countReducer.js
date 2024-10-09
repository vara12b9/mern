// import { INCREASE,DECREASE } from "./countActionType";
 var initialState = {
  val:20
}

export function countReducer(data1 = initialState, action) {
  switch (action.type) {
    case 'increase':
      return {
        val: initialState.val + 1,
      };
      break;
    case 'decrease':
      return {
        val: initialState.val - 1,
      };
      break;
    default:
      return initialState;
  }
}
