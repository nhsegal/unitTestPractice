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

module.exports = {
  capitalize,
  reverseString,
  calculator
};
