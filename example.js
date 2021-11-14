const { numberToOrdinal, calculateRPN, maskCreditCard } = require('./lib');

console.log("---------------#Excercise 1--------------")
console.log("Input: 1234567894 => ", maskCreditCard('1234567894'));
console.log("Input: 123456 => ", maskCreditCard('123456'));
console.log("Input: 54265748624524775246 => ", maskCreditCard('54265748624524775246'));

console.log("---------------#Excercise 2--------------")
console.log("Input: 0 => ", numberToOrdinal('0'));
console.log("Input: 1 => ", numberToOrdinal('1'));
console.log("Input: 2 => ", numberToOrdinal('2'));
console.log("Input: 3 => ", numberToOrdinal('3'));
console.log("Input: 11 => ", numberToOrdinal('11'));
console.log("Input: 12 => ", numberToOrdinal('12'));
console.log("Input: 21 => ", numberToOrdinal('21'));
console.log("Input: 26 => ", numberToOrdinal('26'));
console.log("Input: 111 => ", numberToOrdinal('111'));
console.log("Input: 10 => ", numberToOrdinal('10'));

console.log("---------------#Excercise 3--------------")
console.log("Input: 3 => ", calculateRPN('3'));
console.log("Input: 3 5 + => ", calculateRPN('3 5 +'));
console.log("Input: 2 9 5 + - => ", calculateRPN('2 9 5 + -'));
