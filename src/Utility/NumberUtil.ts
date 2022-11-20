export const getDividedValueUpto2ndDecimal = (value: number) => {
  if (value === 0) return 0.0;
  const quotient = Math.trunc(value * 100).toString();
  const digitsBeforeDecimalPoint = quotient.substring(0, quotient.length - 2);
  const digitsAfterDecimalPoint = quotient.substring(
    quotient.length - 2,
    quotient.length
  );
  return Number(`${digitsBeforeDecimalPoint}.${digitsAfterDecimalPoint}`);
};
