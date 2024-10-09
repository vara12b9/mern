import { createSlice } from "@reduxjs/toolkit";
var initialStateval = {
  count:0
}
export var countSlice = createSlice({
  // key names are pre defined
  name: 'count',
  initialState: initialStateval,
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    }
  }
});
export var { increase, decrease } =countSlice.actions
export default countSlice.reducer