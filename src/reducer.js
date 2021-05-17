import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "./actions";

const initialState = {
  value: 0,
  status: "idle",
};

const reducer = createReducer(initialState, {
  [increment]: (state) => {
    state.value += 1;
  },
  [decrement]: (state) => {
    state.value -= 1;
  },
});

export default reducer;
