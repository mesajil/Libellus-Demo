import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Schedule() {
  const activityList = useSelector(
    (state: RootState) => state.activityList.activityList
  );

  return (
    <div>
      <h3>Schedule</h3>
      {(!activityList || activityList.length === 0) && <h4>Empty List!</h4>}
      {activityList.map((activity) => (
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
