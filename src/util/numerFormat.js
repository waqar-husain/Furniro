export const formatNum = (num) => {
  const formatToINR = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return formatToINR.format(num);
};
