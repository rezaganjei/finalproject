import { createSlice } from "@reduxjs/toolkit";

const init = {
  cart: [
    {
      productId: 1,
      count: 2,
    },
  ],
};

const checkoutCartReducer = createSlice({
  name: "checkoutCartReducer",
  initialState: init,
  reducers: {
    plus: (state, action) => {
      const finder = state.cart.find(
        (item) => action.payload.id === item.productId
      );
      if (finder) {
        finder.count += 1;
      } else {
        const newItem = {
          productId: action.payload.id,
          count: 1,
        };
        state.cart.push(newItem);
      }
    },
    minus: (state, action) => {
      const finder = state.cart.find(
        (item) => item.productId === action.payload.id
      );
      if (finder) {
        if (finder.count > 1) {
          finder.count -= 1;
        } else {
          state.cart.filter((item) => item.productId !== action.payload.id);
        }
      }
    },
  },
});

export const { plus, minus } = checkoutCartReducer.actions;
export default checkoutCartReducer.reducer;
