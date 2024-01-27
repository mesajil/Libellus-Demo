// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";

import { useContext } from "react";
import ActivityContext from "../../context/Activity/ActivityContext";
import { Activity } from "../../utils/Activity";

export default function Schedule() {
  // const activityList = useSelector(
  //   (state: RootState) => state.activityList.activityList
  // );
  const { activities } = useContext(ActivityContext);

  return (
    <div>
      <h3>Schedule</h3>
      {(!activities || activities.length === 0) && <h4>Empty List!</h4>}
      {activities.map((activity: Activity) => (
        <div key={activity.activityId}>
          <h4>My activity {activity.name}</h4>
          <ul>
            <li>id: {activity.activityId}</li>
            <li>description: {activity.description}</li>
            <li>startDateTime: {activity.startDateTime}</li>
            <li>endDateTime: {activity.endDateTime}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
