const makeBigNUmber = (n) => {
  if (n > 0 && typeof n == "number") {
    const number = n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("");
    const result = Number(number);
    console.log(result);
    return result;
  }
};

makeBigNUmber(5698);

//onther answer
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

//
function descendingOrder1(n) {
  return +(n + "")
    .split("")
    .sort(function (a, b) {
      return b - a;
    })
    .join("");
}
