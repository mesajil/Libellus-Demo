import emptyActivity from "../../utils/emptyActivity";
import { GET_ACTIVITIES, SELECT_ACTIVITY } from "../types";
import { Action, ActivitySlice } from "./ActivityContextProps";

const ActivityReducer = (
  state: ActivitySlice,
  action: Action
): ActivitySlice => {
  const { payload, type } = action;
  switch (type) {
    case GET_ACTIVITIES:
      return { ...state, activities: payload.activities || [] };
    case SELECT_ACTIVITY:
      return {
        ...state,
        selectedActivity: payload.selectedActivity || emptyActivity,
      };
    default:
      return state;
  }
};

export default ActivityReducer;
