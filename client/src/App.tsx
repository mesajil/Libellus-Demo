// import { useEffect } from "react";
import "./App.css";
import Activities from "./components/Activities";
import ActivityDetails from "./components/ActivityDetails";
// import { useDispatch } from "react-redux";
// import { createList } from "./redux/features/Activity/activityListReducer";
// import activityList from "./utils/Activities";
import ActivityState from "./context/Activity/ActivityState";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(createList(activityList));
  // }, []);
  return (
    <ActivityState>
      <Activities />
      <ActivityDetails />
    </ActivityState>
  );
}

export default App;
