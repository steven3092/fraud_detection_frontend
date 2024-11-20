import { DEVICE, DeviceInfo } from "../../../services/utils";
import { useMeasurement } from "../blood-sensors/hooks/use-measurement";
import { useSubmitForm } from "./hooks/use-submit-form";

export const Sensor = ({ device }: { device: DeviceInfo }) => {
  const { value, isMeasuring, start } = useMeasurement(device.startMeasurement);
  const { handleSubmitForm } = useSubmitForm(DEVICE.H_POLAR);

  return (
    <form
      className="flex flex-col items-center justify-center p-5"
      onSubmit={handleSubmitForm}
    >
      <div className="bg-white flex flex-col rounded-lg items-center p-10 pb-6 text-center shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600">{device.name}</h1>

        <div className="text-center my-5">
          <div className="heart-container">
            <span className="text-9xl">❤️</span>
          </div>

          {/* <div className="mt-6 text-xl text-gray-700">
            <span className="font-semibold">BPM: </span>
            <span>
              {value} {device.unit}
            </span>
            <input type="hidden" value={value} name="pulse" />
          </div> */}

          {device.inputs.map((input) => (
            <div className="text-xl text-gray-700">
              <span className="font-semibold">{input} </span>
              <span>
                {value[input]} {input}
              </span>
              <input type="hidden" value={value[input]} name={input} />
            </div>
          ))}

          <button
            onClick={device.startMeasurement}
            disabled={isMeasuring}
            className={`mt-6 px-6 py-2 rounded-lg text-white text-lg w-64 ${
              isMeasuring
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isMeasuring ? "Measuring..." : "Start Measurement"}
          </button>

          <button
            type="submit"
            className="mt-5 sm:ml-5 px-5 py-2 text-white text-lg rounded-lg bg-blue-500 hover:bg-blue-600 transition-all"
          >
            Send Data
          </button>
        </div>
      </div>
    </form>
  );
};
