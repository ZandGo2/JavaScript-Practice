const middle = (s) => {
  const index = Math.floor(s.length / 2);
  if (s.length % 2 !== 0) {
    console.log(s[index]);
    return s[index];
  } else {
    const p = s[index - 1] + s[index];
    console.log(p);
    return p;
  }
};

middle("test");

// answer
function getMiddle(s) {
  var middle = s.length / 2;
  return s.length % 2
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

//
function getMiddle1(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

//
return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);