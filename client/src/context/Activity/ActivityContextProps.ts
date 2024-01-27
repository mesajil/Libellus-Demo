import { Activity } from "../../utils/Activity";

export type Action = { type: string; payload: Activity[] };

export interface ActivitySlice {
  activities: Activity[];
  selectedActivity: Activity | null;
}

export interface ActivityContextProps extends ActivitySlice {
  getActivities: (() => void) | null;
}
