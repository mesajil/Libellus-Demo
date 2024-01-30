import { useContext, useEffect } from "react";
import ActivityContext from "../../context/Activity/ActivityContext";
import { Activity } from "../../utils/Activity";

export default function Schedule() {
  const { activities, getActivities, selectActivity } =
    useContext(ActivityContext);
  useEffect(() => {
    const fetchData = async () => {
      await getActivities();
    };
    fetchData();
    return () => {};
  }, [getActivities]);

  const handleClick = (activityId: string) => {
    selectActivity(activityId);
  };

  return (
    <div>
      <h3>Schedule</h3>
      {(!activities || activities.length === 0) && <h4>Empty List!</h4>}
      {activities.map((activity: Activity) => (
        <button
          key={activity.activityId}
          onClick={() => handleClick(activity.activityId)}
        >
          <h4>{activity.name}</h4>
          <ul>
            <li>id: {activity.activityId}</li>
            <li>description: {activity.description}</li>
            <li>startDateTime: {activity.startDateTime}</li>
            <li>endDateTime: {activity.endDateTime}</li>
          </ul>
        </button>
      ))}
    </div>
  );
}
