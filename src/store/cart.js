import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  numberOfItemsInCart: 0,
  showCart: false,
  itemsInCart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const itemIndex = state.itemsInCart.findIndex(item => item.name === action.payload.name);
      if (itemIndex === -1) {
        state.itemsInCart.push(action.payload);
      } else {
        state.itemsInCart[itemIndex].quantity += 1;
      }
      state.numberOfItemsInCart++;
      state.totalPrice += action.payload.price;
    },
    removeItemFromCart(state, action) {
      const itemIndex = state.itemsInCart.findIndex(item => item.name === action.payload.name);
      state.itemsInCart[itemIndex].quantity -= 1;
      state.numberOfItemsInCart--;
      state.totalPrice -= action.payload.price;
      if (state.itemsInCart[itemIndex].quantity === 0) {
        state.itemsInCart.splice(itemIndex, 1);
      }
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
