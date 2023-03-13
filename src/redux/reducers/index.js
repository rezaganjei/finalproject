import { combineReducers } from "redux";
import adminAuthReducer from "./adminAuth/adminAuth";
import checkoutCartReducer from "./checkoutCart/checkoutCart";
import ordersHandlerReducer from "./ordersHandler/ordersHandler";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const combinedReducers = combineReducers({
  adminAuth: adminAuthReducer,
  checkoutCart: checkoutCartReducer,
  ordersHandler: ordersHandlerReducer,
});

const persistedReducers = persistReducer(
  {
    key: "rootPersistor",
    storage,
    whitelist: ["adminAuth", "checkoutCart", "ordersHandler"],
  },
  combinedReducers
);

export default persistedReducers;
