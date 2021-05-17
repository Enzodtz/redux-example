import { createStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer";

export const store = createStore(counterReducer);
