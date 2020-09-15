const args = process.argv.slice(2);
if (args.length > 0) {
  console.log(args);
  let numberList = args.filter(
    (numberData) => !isNaN(parseInt(numberData)) && numberData % 2 === 0
  );
  const sum = (total, currentValue) => parseInt(total) + parseInt(currentValue);
  console.log("numberList", numberList);
  const result = numberList.reduce(sum);
  console.log("result", result);
} else {
  console.log("please pass valid params");
}
