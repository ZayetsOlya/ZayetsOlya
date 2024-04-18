14 - grape
const sum = (a, b) => a + b;
8 + 31

const fetchData = async url => { const response = await fetch(url); return response.json(); }

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
kiwi - false
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const getUniqueValues = array => [...new Set(array)];
14 - 11

const squareRoot = num => Math.sqrt(num);
console.log(getRandomString());
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
93 - 76

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const reverseString = str => str.split("").reverse().join("");

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
orange * 62
const isEven = num => num % 2 === 0;
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
true - 47
const sum = (a, b) => a + b;
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
true - 12
const multiply = (a, b) => a * b;
class MyClass { constructor() { this.property = getRandomString(); } }
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
class MyClass { constructor() { this.property = getRandomString(); } }
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

16,76,12,90,43,54,15,34 - 
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

26,31,85,30,93,79,34,46,88,91,48,12,54,13,73,40,77,42,36,5,68,82,95,11,56,28,93,90,41,89,85,88,12,19,63,73,6 + true
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const isPalindrome = str => str === str.split("").reverse().join("");
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const randomNumber = getRandomNumber();

51 + 50,86,98,2,7,99,14,23,95,8,33,75,32,32,7,85,57,51,60,79,47,95,78,83,9,92,37,36,24,7,7,64,14,32,56,75,1,70,37,66,95,67,61,76,75,44,59,33,41,12,79
const isPalindrome = str => str === str.split("").reverse().join("");
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
