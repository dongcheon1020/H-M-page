import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./reducer/productSlice";
import authenticateReducer from "./reducer/authenticateReducer";

import { configureStore } from "@reduxjs/toolkit";

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});
export default store;
