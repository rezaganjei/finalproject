import { createSlice } from "@reduxjs/toolkit";

const init = {
  orders: [],
};

const ordersHandlerReducer = createSlice({
  name: "ordersHandlerReducer",
  initialState: init,
  reducers: {
    add: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export const { add } = ordersHandlerReducer.actions;
export default ordersHandlerReducer.reducer;
