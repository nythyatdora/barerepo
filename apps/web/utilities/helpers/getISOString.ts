const getISOString = (value: string | null): string => {
  if (!value) return "N/A";
  return new Date(parseInt(value)).toISOString();
};

export { getISOString };
