export const formatNum = (num) => {
  const number =
    typeof num === "string"
      ? Number(num.replaceAll("₹", "").replaceAll(",", ""))
      : num;

  const formatToUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatToUSD.format(number * 0.012);
};
