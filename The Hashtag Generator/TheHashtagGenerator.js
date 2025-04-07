function generateHashtag(str) {
  const x = str.split(" ");
  const t = str.trim();
  if (t.length == 0) {
    return false;
  } else {
    x.unshift("#");
  }
  const y = x.map((item) => {
    return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
  });
  let c = y.join("");
  if (c.length > 140) {
    return false;
  }
  return c;
}

console.log(generateHashtag(""));
console.log(generateHashtag(" ".repeat(200)));

// 1
function generateHashtag(str) {
  var hashtag = str.split(" ").reduce(function (tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, "#");

  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}

// 2
const generateHashtag = (str) =>
  (s =
    "#" +
    str
      .trim()
      .split(" ")
      .filter((e) => e)
      .map((e) => e[0].toUpperCase() + e.substring(1, e.length).toLowerCase())
      .join("")).length > 1 && s.length <= 140
    ? s
    : false;

// 3
function generateHashtag(str) {
  var hash = "#";
  str.split(" ").map((a) => {
    hash += a.charAt(0).toUpperCase() + a.slice(1);
  });
  return hash != "#" && hash.length <= 140 ? hash : false;
}

// 4
const generateHashtag = (str) =>
  !!(str = str.trim()) &&
  (str = "#" + str.replace(/\b./g, (ch) => ch.toUpperCase()).replace(/ /g, ""))
    .length < 141 &&
  str;

// 5
const generateHashtag = (str) =>
  !str.trim()
    ? false
    : str.replace(/ /g, "").length >= 140
    ? false
    : "#" +
      str
        .split(" ")
        .map((v, i) => v.replace(/^./, (s) => s.toUpperCase()))
        .join("");
