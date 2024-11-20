import { DeviceType, InputType } from "../../utils/devices";
import { MeasurementType } from "../../utils/measurements";
import { useMeasurement } from "./hooks/use-measurement";
import { useSubmitForm } from "./hooks/use-submit-form";

export type InputProps = { input: InputType; measure?: MeasurementType };

export const Input = ({ input, measure }: InputProps) => {
  const value = measure?.[input.name as keyof MeasurementType] || "~";

  return (
    <div className="mt-6  text-xl text-gray-700 " key={input.name}>
      <span className="font-semibold">{input.label}: </span>
      <span>{value}</span>
      <span>{input.unit}</span>
      <input type="hidden" value={value} name={input.name} />
    </div>
  );
};

export type SensorProps = { device: DeviceType };

export const Sensor = ({ device }: SensorProps) => {
  const { measure, isMeasuring, start } = useMeasurement(device.getMeasurement);
  const { handleSubmitForm } = useSubmitForm(device);

  return (
    <form className="flex flex-col items-center justify-center p-5" onSubmit={handleSubmitForm}>
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
              isMeasuring ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
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
