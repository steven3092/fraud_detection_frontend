export type MeasurementType = {
  [key in "hr" | "pulse" | "bp_sys" | "bp_dia"]?: number;
};

export function getPolarMX2Measurement(): MeasurementType {
  const bps = Math.floor(((Math.random() * (200 - 40) + 40) / 60) * 100) / 100;
  return { pulse: bps };
}

export function getSamsungX1SMeasurement(): MeasurementType {
  const bpm = Math.floor(Math.random() * (200 - 40) + 40);
  return { hr: bpm };
}

export function getSamsungBPAMeasurement(): MeasurementType {
  const systolic = Math.floor(Math.random() * (140 - 90) + 90);
  const diastolic = Math.floor(Math.random() * (90 - 60) + 60);
  return { bp_sys: systolic, bp_dia: diastolic };
}
