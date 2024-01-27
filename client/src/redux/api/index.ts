import { Activity } from "../../utils/Activity";

const BASE_URL = "http://localhost:3001";

export const fetchActivities = async () => {
  const response = await fetch(`${BASE_URL}/activity`);
  const data = await response.json();
  return data;
};

export const createActivity = async (activity: Activity) => {
  const response = await fetch(`${BASE_URL}/activity`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(activity),
  });
  const data = await response.json();
  return data;
};

export const updateActivity = async (activity: Activity) => {
  const response = await fetch(`${BASE_URL}/activity/${activity.activityId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(activity),
  });
  const data = await response.json();
  return data;
};

export const deleteActivity = async (activityId: string) => {
  const response = await fetch(`${BASE_URL}/activity/${activityId}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
