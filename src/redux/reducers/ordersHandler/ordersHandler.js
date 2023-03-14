import { createSlice } from "@reduxjs/toolkit";

const init = {
  orders: {},
};

const ordersHandlerReducer = createSlice({
  name: "ordersHandlerReducer",
  initialState: init,
  reducers: {
    add: (state, action) => {
      state.orders = action.payload;
    },
    addInfo: (state, action) => {
      state.orders = { ...state.orders, ...action.payload };
    },
  },
});

export const { add, addInfo } = ordersHandlerReducer.actions;
export default ordersHandlerReducer.reducer;
