import { combineReducers } from "redux";
import adminAuthReducer from "./adminAuth/adminAuth";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const combinedReducers = combineReducers({
  adminAuth: adminAuthReducer,
});

const persistedReducers = persistReducer(
  {
    key: "rootPersistor",
    storage,
    whitelist: ["adminAuth"],
  },
  combinedReducers
);

export default persistedReducers;
