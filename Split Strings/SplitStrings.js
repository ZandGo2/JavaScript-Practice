function solution(str) {
  const letter = str.split("");
  if (!str.length % 2 == 0) {
    letter.push("_");
  }
  const s = Math.ceil(str.length / 2);
  let result;
  let save = [];
  let a = 0;
  let b = 2;
  for (let i = 0; i < s; i++) {
    result = letter.slice(a, b).join("");
    a = a + 2;
    b = b + 2;
    save.push(result);
  }
  return save;
}

console.log(solution("abcdefg"));

// 1
function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}

// 2
function solution(str) {
  arr = [];
  for (var i = 0; i < str.length; i += 2) {
    second = str[i + 1] || "_";
    arr.push(str[i] + second);
  }
  return arr;
}

// 3

function solution(str) {
  let res = [];
  for (var i = 0; i < str.length; i += 2)
    res.push(`${str[i] + (str[i + 1] || "_")}`);
  return res;
}

// 4

let solution = (str) =>
  str.length == 0
    ? []
    : str.length % 2 != 0
    ? (str += "_")
        .split("")
        .map((x, i) => (i == 0 ? x : i % 2 == 0 ? " " + x : x))
        .join("")
        .split(" ")
    : str
        .split("")
        .map((x, i) => (i == 0 ? x : i % 2 == 0 ? " " + x : x))
        .join("")
        .split(" ");
