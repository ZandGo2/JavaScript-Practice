function race(v1, v2, g) {
  if (v2 < v1) return null;
  const diffTime = g / (v2 - v1);
  const Hour = Math.floor(diffTime);
  const min = Math.floor((diffTime * 60) % 60);
  const second = Math.floor((diffTime * 3600) % 60);
  console.log([Hour, min, second]);
  return [Hour, min, second];
}

race(18, 19, 59);
race(1, 5, 14);

// best answer
function race(v1, v2, g) {
  let time = g / (v2 - v1);
  return v2 > v1
    ? [
        Math.floor(time),
        Math.floor((time * 60) % 60),
        Math.floor((time * 3600) % 60),
      ]
    : null;
}

//
function race(v1, v2, g) {
  if (v2 < v1) {
    return null;
  }

  var seconds = Math.floor((g / (v2 - v1)) * 3600);
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds - h * 3600) / 60);
  var s = seconds - h * 3600 - m * 60;

  return [h, m, s];
}

//
race = (v1, v2, g) => (
  (t = g / (v2 - v1)),
  t < 0 ? null : [t, (t * 60) % 60, (t * 3600) % 60].map(Math.floor)
);
