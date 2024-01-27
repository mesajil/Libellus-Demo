import { createContext } from "react";
import { ActivityContextProps } from "./ActivityContextProps";

const ActivityContext = createContext<ActivityContextProps>({
  activities: [],
  selectedActivity: null,
  getActivities: null,
});

export default ActivityContext;
