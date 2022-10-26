function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

const calculator = {
  add: (a , b) => {
    if (isNaN(a) || isNaN(b)){
      throw new Error('Make sure both inputs are numbers');
    }
    return parseFloat(a) + parseFloat(b);
  },
  subtract: (a , b) => {
    if (isNaN(a) || isNaN(b)){
      throw new Error('Make sure both inputs are numbers');
    }
    
    return parseFloat(a) - parseFloat(b);
  },
  multiply: (a , b) => {
    if (isNaN(a) || isNaN(b)){
      throw new Error('Make sure both inputs are numbers');
    }
    return parseFloat(a) * parseFloat(b);
  },
  divide: (a , b) => {
    if (isNaN(a) || isNaN(b)){
      throw new Error('Make sure both inputs are numbers');
    }

    if (b == 0){
      throw new Error('Cannot divide by zero');
    }

    return parseFloat(a) / parseFloat(b);
  }
} 

function caeserCipher(str, shift) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let ans = ''
  let shifted = ''
  for (let letter of str){
    if (!alphabet.includes(letter.toLowerCase())){
      shifted = letter;
    }
    else if (letter == letter.toUpperCase()) {
      letter = letter.toLowerCase(); 
      let newIndex = (alphabet.indexOf(letter) + shift) % 26
      shifted = alphabet[newIndex]
      shifted = shifted.toUpperCase(); 
    }
    else {
      let newIndex = (alphabet.indexOf(letter) + shift) % 26
      shifted = alphabet[newIndex]
    }
    ans = ans + shifted;
  }
  return ans
}

function analyzeArray {

}


module.exports = {
  capitalize,
  reverseString,
  calculator,
  caeserCipher,
  analyzeArray
};
