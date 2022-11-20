export const getDividedValueUpto2ndDecimal = (value: number) => {
  const quotient = String(Math.trunc(value * 100));
  return Number(
    `${quotient.substring(0, quotient.length - 3)}.${quotient.substring(
      quotient.length - 2,
      quotient.length
    )}`
  );
};
