// Falsy Bouncer
//
// Remove all falsy values from an array.
//
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//
// Hint: Try converting each value to a Boolean.
//
// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
//
// My Solution:

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
let falsies = [false, null, 0, "", undefined, NaN]
let trues = [];
for (let i = 0; i < arr.length; i++) {
  if (falsies.includes(arr[i])) {
    continue;
  } else trues.push(arr[i]);
}
  return trues;
}

bouncer([7, "ate", "", false, 9]);
