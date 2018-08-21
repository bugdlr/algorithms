// DOESNT WORK YET


// Translate the provided string to pig latin.
//
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
// If a word begins with a vowel you just add "way" to the end.
//
// Input strings are guaranteed to be English words in all lowercase.



function translatePigLatin(str) {
  let vowel = "aeiou";
  if (vowel.includes(str[0])) {
     return str = str + "way";
  } else if {
    let arr = [...str];
    arr.forEach(letter => {
      if (!vowel.includes(letter)) {
        arr = arr.push(arr.shift());
      } else {
        return arr.push("a", "y");
      }
    })
  } str =  arr.toString().replace(/,/g, "");
    return str;
}



// translatePigLatin("consonant");
//
// translatePigLatin("california") should return "aliforniacay".
//
// translatePigLatin("paragraphs") should return "aragraphspay".
//
// translatePigLatin("glove") should return "oveglay".
//
// translatePigLatin("algorithm") should return "algorithmway".
//
// translatePigLatin("eight") should return "eightway".
//
// Should handle words where the first vowel comes in the end of the word.
//
// Should handle words without vowels.


function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");


// OR

function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

// test here
translatePigLatin("consonant");


// OR

function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    // check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }

    // return initial str + "way" if it starts with vowel
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");

    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 // convert array to string and concatenate "ay" at the end
 return strArr.join("")+"ay";
}

// test here
translatePigLatin("consonant");
