import { useState } from "react";
import { MeasurementType } from "../../../utils/measurements";

export const useMeasurement = (fn: () => MeasurementType) => {
  const [measure, setValue] = useState<object>();
  const [isMeasuring, setIsMeasuring] = useState<boolean>(false);

  const start = () => {
    setIsMeasuring(true);

    setTimeout(() => {
      const res = fn();
      setValue(res);

      setIsMeasuring(false);
    }, 3000);
  };

  return {
    measure,
    isMeasuring,
    start,
  };
};
