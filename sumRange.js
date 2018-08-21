// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
//
// The lowest number will not always come first.


function sumAll(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  } return sum;
}

sumAll([1, 4]);

sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
