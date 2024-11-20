import { usePolarMX2 } from "./hooks/use-polar-mx2";
import { useSubmitFormPolarMX2 } from "./hooks/use-submit-form-polar-mx2";

export const PolarMX2 = () => {
  const { bpm, isMeasuring, startMeasurement } = usePolarMX2();
  const { handleSubmitForm } = useSubmitFormPolarMX2();

  return (
    <form
      id="polarmx2Form"
      className="flex flex-col items-center justify-center p-5"
      onSubmit={handleSubmitForm}
    >
      <div className="bg-white flex flex-col rounded-lg items-center p-10 pb-6 text-center shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600">
          Polar MX2 heart rate monitor
        </h1>

        <div className="text-center my-5">
          <div className="heart-container">
            <span className="text-9xl">❤️</span>
          </div>

          <div className="mt-6 text-xl text-gray-700">
            <span className="font-semibold">BPM: </span>
            <span>{bpm} per seconds</span>
            <input type="hidden" value={bpm} name="polar-mx2" />
          </div>

          <button
            onClick={startMeasurement}
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
