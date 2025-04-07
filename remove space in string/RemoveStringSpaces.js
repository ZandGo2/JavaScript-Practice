const text = "8 j 8   mBliB8g  imjB8B8  jl  B";

let result = text.replaceAll(" ", "");
console.log(result);

//
let res = text.split(" ").join("");
console.log(res);

//
console.log(
  text
    .split("")
    .filter((e) => e.trim().length)
    .join("")
);