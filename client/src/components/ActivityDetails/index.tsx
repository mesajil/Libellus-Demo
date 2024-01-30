import { useContext } from "react";
import ActivityContext from "../../context/Activity/ActivityContext";

export default function Summary() {
  const { selectedActivity } = useContext(ActivityContext);

  return selectedActivity.activityId ? (
    <div>Activity Details: {selectedActivity.name}</div>
  ) : (
    <div>Select one!</div>
  );
}
