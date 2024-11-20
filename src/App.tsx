import { PolarMX2 } from "./components/sensors/heart-sensors/polar-mx2";
import { SamsungX1S } from "./components/sensors/heart-sensors/samsung-x1s";
import { SamsungBPA } from "./components/sensors/blood-sensors/samsung-bpa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <main>
      <ToastContainer />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <PolarMX2 />
        <SamsungX1S />
        <SamsungBPA />
      </div>
    </main>
  );
}

export default App;
