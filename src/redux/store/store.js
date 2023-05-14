import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../slice/account";
import postReducer from "../slice/post";
const store = configureStore({
  reducer: {
    account: accountReducer,
    post: postReducer,
  },
});
export default store;
