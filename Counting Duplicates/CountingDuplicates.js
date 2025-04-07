const count = (arr) => {
  if (arr.length == 0) return 0;
  const cc = arr.split("");
  console.log(cc);
  const myMap = new Map();
  const all = cc.forEach((item) => {
    if (myMap.has(item)) {
      return myMap.set(item, +myMap.get(item) + 1);
    } else {
      return myMap.set(item, "1");
    }
  });
  return myMap;
};

const items = "banana";
const result = count(items);
console.log(result);