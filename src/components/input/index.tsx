import { MeasurementType } from "../../utils/measurements";
import { InputType } from "../../utils/types";

export type InputProps = { input: InputType; measure?: MeasurementType };

export const Input = ({ input, measure }: InputProps) => {
  const value = measure?.[input.name as keyof MeasurementType] || "~";

  return (
    <div className="mt-6  text-xl text-gray-700 " key={input.name}>
      <span className="font-semibold">{input.label}: </span>
      <span>{value} </span>
      <span>{input.unit}</span>
      <input type="hidden" value={value} name={input.name} />
    </div>
  );
};
