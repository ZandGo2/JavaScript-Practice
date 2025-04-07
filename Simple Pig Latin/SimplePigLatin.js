function pigIt(str) {
  const newArray = [];
  str.split(" ").forEach((item) => {
    if (item.includes("!") || item.includes("?")) {
      newArray.push(item);
    } else {
      const result = `${item.slice(1)}${item.slice(0, 1)}ay`;
      newArray.push(result);
    }
  });
  const text = newArray.join(" ");
  return text;
  // console.log(text);
}

pigIt("d Hello world !");

// best answer
function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}

//
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + "ay";
  });
}

//
function pigIt(str) {
  return str
    .split(" ")
    .map((item) => `${item.substr(1)}${item[0]}ay`)
    .join(" ");
}

//
function pigIt(str) {
  return str
    .split(" ")
    .map((word) =>
      word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + "ay" : word
    )
    .join(" ");
}

//
function pigIt(str) {
  //Code here
  return str
    .split(" ")
    .map((word) => {
      return word.substring(1) + word[0] + "ay";
    })
    .join(" ");
}
