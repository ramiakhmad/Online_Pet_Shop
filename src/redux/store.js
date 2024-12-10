import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import cartSlice from "./cartSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    cart: cartSlice,
    cart: cartReducer,
  },
  devTools: true,
});
store.subscribe(() => {
  localStorage.setItem("cartItems", JSON.stringify(store.getState().cart.items));
});

export default store;
