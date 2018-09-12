// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.



function rot13(str) { // LBH QVQ VG!
  let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  const strArr = [];
  const answer = [];

  for (let i = 0; i < str.length; i++) {
    strArr.push(str[i]);
    }

  for (let i = 0; i < strArr.length; i++) {
     if (!alphabet.includes(str[i])) {
         answer.push(str[i]);
     } else {
        let index =  alphabet.findIndex(letter => letter === strArr[i]);
        let newIndex = index + 13;
        if (newIndex > 25) {
        newIndex = index + 13 - 26;
        } else {
        newIndex = index + 13;
        }
        answer.push(alphabet[newIndex]);
     }
  }
return answer.join("");

}
// Change the inputs below to test
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");



// rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP

// rot13("SERR CVMMN!") should decode to FREE PIZZA!

// rot13("SERR YBIR?") should decode to FREE LOVE?

// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
