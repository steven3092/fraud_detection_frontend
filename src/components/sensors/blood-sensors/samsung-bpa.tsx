import { useSamsungBPA } from "./hooks/use-samsung-bpa";
import { useSubmitFormSamsungBPA } from "./hooks/use-submit-form-samsung-bpa";

export const SamsungBPA = () => {
  const { systolic, diastolic, isMeasuring, startMeasurement } =
    useSamsungBPA();
  const { handleSubmitForm } = useSubmitFormSamsungBPA();

  return (
    <form
      id="samsungbpaForm"
      className="flex flex-col items-center justify-center p-5"
      onSubmit={handleSubmitForm}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 mx-auto text-center">
        <h1 className="text-2xl font-bold text-blue-600">
          Samsung BPA blood pressure monitor
        </h1>

        <div className="mt-6">
          <div className="text-xl text-gray-700">
            <span className="font-semibold">Systolic: </span>
            <span>{systolic} mmHg</span>
            <input type="hidden" value={systolic} name="sys-samsung-bpa" />
          </div>
          <div className="text-xl text-gray-700 mt-2">
            <span className="font-semibold">Diastolic: </span>
            <span>{diastolic} mmHg</span>
            <input type="hidden" value={diastolic} name="dia-samsung-bpa" />
          </div>
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
    </form>
  );
};
