function solution(string) {
  const text = string.split("");
  const newArray = [];
  const find = text.map((item) => {
    if (item == item.toUpperCase()) {
      newArray.push(" ");
      newArray.push(item);
    } else {
      newArray.push(item);
    }
  });
  const result = newArray.join("");
  return result;
  console.log(result);
}

solution("");
solution("camelCasing");
solution("camelCasingTest");

// best answer
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

//
function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}

//
function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

//
const solution = (string) => {
  return [...string]
    .map((char) => {
      return char === char.toUpperCase() ? ` ${char}` : char;
    })
    .join("");
};
