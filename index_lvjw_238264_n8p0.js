const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
kiwi

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

orange - 74,65,89,65,12,7,40,78,57,3,97,62,79,79,40,30,76,19,34,72,87,36,15,78,83,29,78,68,8,90,22,77,57,38,76,94,58,4,40,71,5,22,12,87,38,28,53,56,3,97,44,1,33,55,44,24,36,29,70,54,41,19,79,33,56,82,81,17,68,5,94,95,23,73,82,13,95,64,86,20,85,47,81,85
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
false + 49
const removeDuplicates = array => Array.from(new Set(array));
apple

const formatDate = date => new Date(date).toLocaleDateString();
banana * true
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

