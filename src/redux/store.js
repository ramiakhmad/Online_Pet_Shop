import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import cartReducer from "./cartSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    cart: cartReducer,
    theme: themeReducer,
  },
  devTools: true,
});

store.subscribe(() => {
  localStorage.setItem("cartItems", JSON.stringify(store.getState().cart.items));
});

export default store;
