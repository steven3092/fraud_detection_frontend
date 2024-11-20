import { useState } from "react";

export const useMeasurement = (fn: () => object) => {
  const [value, setValue] = useState<object>({});
  const [, setStatus] = useState<string>("");
  const [isMeasuring, setIsMeasuring] = useState<boolean>(false);

  const start = () => {
    setIsMeasuring(true);
    setStatus("Measuring...");

    setTimeout(() => {
      const res = fn();
      setValue(res);

      setIsMeasuring(false);
    }, 3000);
  };

  return {
    value,
    isMeasuring,
    start,
  };
};

export const useSamsungBPA = () => {
  const [systolic, setSystolic] = useState<number>(0);
  const [diastolic, setDiastolic] = useState<number>(0);
  const [, setStatus] = useState<string>("");
  const [isMeasuring, setIsMeasuring] = useState<boolean>(false);

  const startMeasurement = () => {
    setIsMeasuring(true);
    setStatus("Measuring...");

    setTimeout(() => {
      const newSystolic = Math.floor(Math.random() * (140 - 90) + 90);
      const newDiastolic = Math.floor(Math.random() * (90 - 60) + 60);
      setSystolic(newSystolic);
      setDiastolic(newDiastolic);

      setIsMeasuring(false);
    }, 3000);
  };

  return {
    systolic,
    diastolic,
    isMeasuring,
    startMeasurement,
  };
};
