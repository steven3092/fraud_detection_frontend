import { useState } from "react";

export const useSamsungX1S = () => {
  const [bpm, setBpm] = useState<number>(0);
  const [, setStatus] = useState<string>("");
  const [isMeasuring, setIsMeasuring] = useState<boolean>(false);

  const startMeasurement = () => {
    setIsMeasuring(true);
    setStatus("Measuring...");

    setTimeout(() => {
      const newBpm = Math.floor(Math.random() * (200 - 40) + 40);
      setBpm(newBpm);

      setIsMeasuring(false);
    }, 3000);
  };

  return {
    bpm,
    isMeasuring,
    startMeasurement,
  };
};
