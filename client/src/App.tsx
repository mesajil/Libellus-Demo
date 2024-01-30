import "./App.css";
import Activities from "./components/Activities";
import ActivityDetails from "./components/ActivityDetails";
import ActivityState from "./context/Activity/ActivityState";

function App() {
  return (
    <ActivityState>
      <Activities />
      <ActivityDetails />
    </ActivityState>
  );
}

export default App;
