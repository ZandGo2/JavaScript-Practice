const play = (number) => {
  let name = number;
  let name1 = number.toLowerCase()[0];
  name1 == "r"
    ? (name = `${name} plays banjo`)
    : (name = `${name} does not play banjo`);
  return name;
};

console.log(play("Ringoplays banjo"));

// another answer
const areYouPlayingBanjo = (name) =>
  name.startsWith("R") || name.startsWith("r")
    ? `${name} plays banjo`
    : `${name} does not play banjo`;

//
const areYouPlayingBanjo1 = (n) => n + (n.match(/^r/i) ? " plays banjo" : " does not play banjo");

//
function areYouPlayingBanjo2(name) {
  return name[0].toLowerCase() === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
}
