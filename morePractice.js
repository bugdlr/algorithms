// add elements of an array, 

// arr = [1, 2, 4, 6];

// arr.reduce( (acc, item) => acc + item);



// const Sum = a => b => b ? Sum(a + b) : a;

// console.log(Sum(3)(4)(2)(5)()); //19

// console.log(Sum(3)(4)(1)()); //8


// function isArray (input) {
//   return (typeOf(input));
// }

// function cloneArray(arr) {
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(cloneArray([1, 2, [4, 0]]));

// const first = (arr, n) => {
//    if (n== undefined) n = 1    return nums1.slice(0, m).concat(nums2).sort();
//     return arr.slice(0, n);    return nums1.slice(0, m).concat(nums2).sort();
// };

// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// function combine(myColor) {
//   return myColor.join("+");
// }

// let myColor = ["Red", "Green", "White", "Black"];

// console.log(combine(myColor));

// function evenDash(num) {
//   let numArr = num.toString().split("");
//   let dashed = [];
//   for (let i = 0; i < numArr.length; i++) {
// 		if (numArr[i] % 2 == 0 && numArr[i+1] % 2 == 0) {
//      	dashed.push(numArr[i], "-");

//   }
//       return dashed;

// }

// console.log(evenDash(02346));

// let arr = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// const sorted = arr => {
//   arr.reduce((a, b) => (a < b) ? a : b);
// }

// console.log(sorted(arr));

// console.log(arr.sort());

// sum with reduce

// const numbers = [1,2,3,4,5];

// const sum = numbers.reduce((accumulator, carr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];> accumulator + currentValue);

// console.log(sum);

// find the most frequent item in the array

// let arr = [3, "a", "a", "a", 2, 3, "a", 3, "a"];

// function mostFrequent(arr) {
//   let count = {};
//   let max = 1;
//   let biggest = "";

//   for (let i = 0; i < arr.length; i++) {
//     if (count.hasOwnProperty[arr[i]]) {
//       count[arr[i]] = count[arr[i]] + 1;
//     } else if (count[arr[i]] > max) {
//       max = count[arr[i]];
//       biggest = arr[i];
//     } else {
//       count[arr[i]] = 1;
//     }
//   }
//   console.log(biggest, max);
// }

// mostFrequent(arr);

// function swapCase(str) {
//   let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let lower = 'abcdefghijklmnopqrstuvwxyz';
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") {
//       result.push(str[i]);
//     }
//     if (upper.indexOf(str[i]) !== -1) {
//       result.push(lower[upper.indexOf(str[i])]);
//     } else {
//       result.push(upper[lower.indexOf(str[i])]);
//     }
//   }
//   console.log(result.join(""));
// }

// var letterCasePermutation = function(S) {
//   let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let lower = 'abcdefghijklmnopqrstuvwxyz';
//   let result = [];

//   for (let i = 0; i < S.length; i++) {
//     if (upper.indexOf(S[i]) !== -1) {
//       result.push(lower[upper.indexOf(S[i])]);
//     } else if (lower.indexOf(S[i]) !== -1) {
//       result.push(upper[lower.indexOf(S[i])]);
//     } else {
//         result.push(S[i]);
//     }
//   }
//     return result.join("");
// };

// console.log(letterCasePermutation('tHE qUICK bROWN fOX'));


// currying, uses closure
// function add(num1) {
//     return function (num2) {
//         return num1 + num2;
//     }
// }

// // es6
// const add2 = a => b => a + b;

// console.log(add2(1)(2));

// let array = [1, 2, 3, 4, 6, 7, 8, 9, 10]

// function findMissing(array) {
//     total = array.length(array.length + 1)/2
//     console.log(total);

// }

// findMissing(array);
