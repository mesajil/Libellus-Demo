import { configureStore, combineReducers } from "@reduxjs/toolkit";
import activityListReducer from "./features/Activity/activityListReducer";

const rootReducer = combineReducers({
  activityList: activityListReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
