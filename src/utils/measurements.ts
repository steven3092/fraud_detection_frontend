export type MeasurementType = {
  [key in "hr" | "pulse" | "bp-sys" | "bp-dia"]?: number;
};

export function getPolarMeasurement(): MeasurementType {
  const bps = Math.floor(((Math.random() * (200 - 40) + 40) / 60) * 100) / 100;
  return { pulse: bps };
}

export function getX1Measurement(): MeasurementType {
  const bpm = Math.floor(Math.random() * (200 - 40) + 40);
  return { hr: bpm };
}

export function getBloodMeasurement(): MeasurementType {
  const systolic = Math.floor(Math.random() * (140 - 90) + 90);
  const diastolic = Math.floor(Math.random() * (90 - 60) + 60);
  return { "bp-sys": systolic, "bp-dia": diastolic };
}
