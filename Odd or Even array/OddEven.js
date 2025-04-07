const add = (array) => {
  if (array !== null && array !== undefined && array.length !== 0) {
    const result = array.reduce((a, b) => a + b);
    // return result % 2 == 0 ? "even" : "odd"
    console.log(result % 2 == 0 ? "even" : "odd");
  } else {
    return [0];
  }
};

add([]);

// answer
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

//
const oddOrEven1 = (a) => a.reduce((s, n) => s + n, 0) % 2 == 0 ? "even" : "odd";