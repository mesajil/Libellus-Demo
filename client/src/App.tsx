import { useEffect } from "react";
import "./App.css";
import Schedule from "./components/Schedule";
import Summary from "./components/Summary";
import { useDispatch } from "react-redux";
import { createList } from "./redux/activityListReducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const activityList = [
      {
        activityId: "1",
        name: "Libellus Meeting",
        description: "Meeting",
        startDateTime: "2024-01-24T19:00:00.000Z",
        endDateTime: "2024-01-25T18:00:00.000Z",
      },
      {
        activityId: "2",
        name: "Libellus Meeting",
        description: "Meeting",
        startDateTime: "2024-01-24T19:00:00.000Z",
        endDateTime: "2024-01-25T18:00:00.000Z",
      },
    ];
    dispatch(createList(activityList));
  }, []);
  return (
    <>
      <Summary />
      <Schedule />
    </>
  );
}

export default App;
