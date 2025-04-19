function rgb(r, g, b) {
  const RoundNumber = (num) => {
    if (num > 255) num = 255;
    if (num < 0) num = 0;
    return num.toString(16).length == 1
      ? `0${num.toString(16).toUpperCase()}`
      : num.toString(16).toUpperCase();
  };

  return `${RoundNumber(r)}${RoundNumber(g)}${RoundNumber(b)}`;
}

console.log(rgb(0, 47, -20));

//
function rgb(r, g, b) {
  return [r, g, b]
    .map(function (x) {
      return ("0" + Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    })
    .join("")
    .toUpperCase();
}

//
const rgb = (r, g, b) =>
  [r, g, b]
    .map((val) => Math.max(0, Math.min(255, val)).toString(16).padStart(2, `0`))
    .join(``)
    .toUpperCase();

