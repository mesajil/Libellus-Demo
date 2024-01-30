import { Activity } from "../../utils/Activity";

export type Action = {
  type: string;
  payload: { activities?: Activity[]; selectedActivity?: Activity };
};

export interface ActivitySlice {
  activities: Activity[];
  selectedActivity: Activity;
}

export interface ActivityContextProps extends ActivitySlice {
  getActivities: () => Promise<void>;
  selectActivity: (activyId: string) => void;
}
