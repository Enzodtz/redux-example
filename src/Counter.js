import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  function selectCount(state) {
    return state.value;
  }

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
