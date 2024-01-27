import ActivityReducer from "./ActivityReducer";
import ActivityContext from "./ActivityContext";
import { ReactNode, useReducer } from "react";
import axios from "axios";
import { GET_ACTIVITIES } from "../types";
import { ActivitySlice } from "./ActivityContextProps";
import activityList from "../../utils/Activities";

const ActivityState = ({ children }: { children: ReactNode }) => {
  const initialState: ActivitySlice = {
    activities: activityList,
    selectedActivity: null,
  };
  const [state, dispatch] = useReducer(ActivityReducer, initialState);

  const getActivities = async () => {
    try {
      const url = `http://localhost:3001/activity?sort_startDateTime=ASC`;
      const response = await axios.get(url);
      dispatch({ type: GET_ACTIVITIES, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ActivityContext.Provider
      value={{
        activities: state.activities,
        selectedActivity: state.selectedActivity,
        getActivities,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityState;
