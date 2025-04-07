const srting1 = "58";

const number = (srting) => {
  const x = Number(srting);
  return x;
};

number(srting1);

// best answer

var stringToNumber = function (str) {
  return parseInt(str);
};

//2
var stringToNumber = function (str) {
  return +str;
};

//3
const stringToNumber = (str) => Number(str);