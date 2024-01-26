import { configureStore, combineReducers } from "@reduxjs/toolkit";
import activityListReducer from "./activityListReducer";

const rootReducer = combineReducers({
  activityList: activityListReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
