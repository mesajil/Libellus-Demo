import { GET_ACTIVITIES } from "../types";
import { Action, ActivitySlice } from "./ActivityContextProps";

const ActivityReducer = (state: ActivitySlice, action: Action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_ACTIVITIES:
      return { ...state, activities: payload };
    default:
      return state;
  }
};

export default ActivityReducer;
