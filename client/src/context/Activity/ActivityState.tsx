import ActivityReducer from "./ActivityReducer";
import ActivityContext from "./ActivityContext";
import { ReactNode, useCallback, useReducer } from "react";
import axios from "axios";
import { GET_ACTIVITIES, SELECT_ACTIVITY } from "../types";
import { ActivitySlice } from "./ActivityContextProps";
import emptyActivity from "../../utils/emptyActivity";

const ActivityState = ({ children }: { children: ReactNode }) => {
  const initialState: ActivitySlice = {
    activities: [],
    selectedActivity: emptyActivity,
  };
  const [state, dispatch] = useReducer(ActivityReducer, initialState);

  const getActivities = useCallback(async () => {
    try {
      const url = `http://localhost:3001/activity?sort_startDateTime=ASC`;
      const response = await axios.get(url);
      dispatch({
        type: GET_ACTIVITIES,
        payload: { activities: response.data },
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const selectActivity = (activityId: string) => {
    const selectedActivity = state.activities.find(
      (activity) => activity.activityId == activityId
    );
    dispatch({
      type: SELECT_ACTIVITY,
      payload: { selectedActivity },
    });
  };

  return (
    <ActivityContext.Provider
      value={{
        activities: state.activities,
        selectedActivity: state.selectedActivity,
        getActivities,
        selectActivity,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityState;
