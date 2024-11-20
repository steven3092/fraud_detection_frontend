import { Sensor } from "./components/sensors/sensor";
import { ToastContainer } from "react-toastify";
import { DEVICES } from "./utils/devices";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <main>
      <ToastContainer />
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        {Object.keys(DEVICES).map((d) => (
          <Sensor device={DEVICES[d]} key={d} />
        ))}
      </div>
    </main>
  );
}

export default App;
