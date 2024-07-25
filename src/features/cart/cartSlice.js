import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item.quantity > 1) {
        cartSlice.caseReducers.decreaseQuantity(state, action);
      } else {
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== action.payload,
        );
      }
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getCart = (state) => state.cart.cart;
export const getCurrentQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId == id)?.quantity ?? 0;
export const getTotalQuantitiy = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalPirce = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
