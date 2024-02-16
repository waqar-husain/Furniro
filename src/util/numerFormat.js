export const formatNum = (num) => {
  const formatToUs = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatToUs.format(num);
};
