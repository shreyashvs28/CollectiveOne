// src/utils/helpers.ts

export const clamp = (
  value: number,
  min: number,
  max: number
): number => {
  return Math.min(max, Math.max(min, value));
};

export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export const calculatePercentage = (
  part: number,
  total: number
): number => {
  if (total === 0) return 0;
  return Math.round((part / total) * 100);
};
