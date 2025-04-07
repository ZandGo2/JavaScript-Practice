const name1 = "mobin";
const name2 = "world";

const reverses = (nam) => {
  let result = nam.split("");
  result = result.reverse();
  result = result.join("");
  console.log(result);
};
reverses(name1);
reverses(name2);

// best answer
function solution(str) {
  return str.split("").reverse().join("");
}

// another answer
const solution = (str) => str.split("").reverse().join("");

// another answer
function solution(s) {
  var o = "";
  for (var i = s.length - 1; i >= 0; i--) o += s[i];
  return o;
}

// another answer
let solution = (str) => [...str].reverse().join("");
