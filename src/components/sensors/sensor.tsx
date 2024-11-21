import { Input } from "../input";
import { DeviceType } from "../../utils/types";
import { useMeasurement } from "./hooks/use-measurement";
import { useSubmitForm } from "./hooks/use-submit-form";

export type SensorProps = { device: DeviceType };

export const Sensor = ({ device }: SensorProps) => {
  const { measure, isMeasuring, start } = useMeasurement(device.getMeasurement);
  const { handleSubmitForm } = useSubmitForm(device);

  return (
    <form
      className="flex flex-col items-center justify-center p-5"
      onSubmit={handleSubmitForm}
    >
      <div className="bg-white flex flex-col rounded-lg items-center p-10 pb-6 text-center shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600">{device.name}</h1>

        <div className="text-center my-5">
          {device.type == "HEART" && (
            <div className="heart-container">
              <span className="text-9xl select-none">❤️</span>
            </div>
          )}

          {device.inputs.map((input) => (
            <Input measure={measure} input={input} key={input.name} />
          ))}

          <button
            onClick={start}
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
