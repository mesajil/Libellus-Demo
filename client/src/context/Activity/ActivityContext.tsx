import { createContext } from "react";
import { ActivityContextProps } from "./ActivityContextProps";
import emptyActivity from "../../utils/emptyActivity";

const ActivityContext = createContext<ActivityContextProps>({
  activities: [],
  selectedActivity: emptyActivity,
  getActivities: async () => {},
  selectActivity: () => {},
});

export default ActivityContext;
