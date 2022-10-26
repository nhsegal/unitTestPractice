const testFunctions = require("./script");

test("Capitalizes first letter", () => {
  expect(testFunctions.capitalize("hello")).toBe("Hello");
});

test("Leave correct string alone", () => {
  expect(testFunctions.capitalize("Mangoes")).toBe("Mangoes");
});

test("Reverse a string", () => {
  expect(testFunctions.reverseString("Math")).toBe("htaM");
})

test("Reverse a sentence", () => {
  expect(testFunctions.reverseString("A merry man is fat.")).toBe(".taf si nam yrrem A");
})

test("Calculator adds two ints", () => {
  expect(testFunctions.calculator.add(2,9)).toEqual(11)
})

test("Calculator adds two floats", () => {
  expect(testFunctions.calculator.add(2.7,-1.3)).toBeCloseTo(1.4)
})

test("Adds, not concats numbers", () => {
  expect(testFunctions.calculator.add('2',-1.3)).toBeCloseTo(0.7)
})

test("Only accepts numbers", () => {
  expect(() => testFunctions.calculator.add({},-1.3)).toThrow('Make sure both inputs are numbers')
})

test("Calculator subtracts two floats", () => {
  expect(testFunctions.calculator.subtract(2.7,-1.3)).toBeCloseTo(4.0)
})

test("Calculator subtracts two ints", () => {
  expect(testFunctions.calculator.subtract(1000, 5)).toEqual(995)
})

test("Subtraction only accepts numbers", () => {
  expect(() => testFunctions.calculator.subtract({},-1.3)).toThrow('Make sure both inputs are numbers')
})


test("Calculator multiplies two floats", () => {
  expect(testFunctions.calculator.multiply(2.0,-.3)).toBeCloseTo(-0.6)
})

test("Calculator multiplies two ints", () => {
  expect(testFunctions.calculator.multiply(1000, 5)).toEqual(5000)
})

test("Multiplication only accepts numbers", () => {
  expect(() => testFunctions.calculator.multiply('a',-1.3)).toThrow('Make sure both inputs are numbers')
})


test("Calculator divides two floats", () => {
  expect(testFunctions.calculator.divide(2.0,-.1)).toBeCloseTo(-20.0)
})

test("Calculator divides two ints", () => {
  expect(testFunctions.calculator.divide(1000, 5)).toEqual(200)
})

test("Division only accepts numbers", () => {
  expect(() => testFunctions.calculator.divide('a',-1.3)).toThrow('Make sure both inputs are numbers')
})

test("Division by zero is caught", () => {
  expect(() => testFunctions.calculator.divide(2,0)).toThrow('Cannot divide by zero')
})

test("No shift returns original str", () => {
  expect(testFunctions.caeserCipher("Hello", 0)).toBe("Hello") 
})

test("Shift of 1 returns correctly", () => {
  expect(testFunctions.caeserCipher("abc", 1)).toBe("bcd") 
})

test("wraps", () => {
  expect(testFunctions.caeserCipher("xyz", 2)).toBe("zab")
})

test("Leaves punctutation and spacing alone", () => {
  expect(testFunctions.caeserCipher("A fat fox.", 3)).toBe("D idw ira.")
})