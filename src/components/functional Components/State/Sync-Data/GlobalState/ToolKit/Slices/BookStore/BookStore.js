import { createSlice } from '@reduxjs/toolkit';
var cakeValue = {
  value: 100,
};

var cakeSlice = createSlice({
  name: 'cake',
  initialState: cakeValue,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

export var { increase, decrease } = cakeSlice.actions;
export default cakeSlice.reducer;
