import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  numberOfItemsInCart: 0,
  itemsInCart: [],
  totalPrice: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.numberOfItemsInCart = action.payload.numberOfItemsInCart || 0;
      state.itemsInCart = action.payload.itemsInCart || [];
      state.totalPrice = action.payload.totalPrice;
    },
    addItemToCart(state, action) {
      const itemIndex = state.itemsInCart.findIndex(item => item.name === action.payload.name);
      state.changed = true;
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
      state.changed = true;
      state.itemsInCart[itemIndex].quantity -= 1;
      state.numberOfItemsInCart--;
      state.totalPrice -= action.payload.price;
      if (state.itemsInCart[itemIndex].quantity === 0) {
        state.itemsInCart.splice(itemIndex, 1);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
