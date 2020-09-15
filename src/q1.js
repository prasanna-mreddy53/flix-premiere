let data = [1, 2, 3, null, 4, 5, "a", 6];
let numberList = data.filter(
  (numberData) => !isNaN(numberData) && numberData % 2 === 0
);
const sum = (total, currentValue) => total + currentValue;
const result = numberList.reduce(sum);
console.log("result:" + result);
