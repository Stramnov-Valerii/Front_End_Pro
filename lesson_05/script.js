let arr = [];  
    minValue = ``;
    minArrValue = ``;
    maxArrValue = ``;
    arrLength = prompt(`What length of array from '2' to '10' numbers would you like?`);
while (!arrLength || isNaN(arrLength) || arrLength < 2 && arrLength > 10) {
    arrLength = prompt(`What length of array from '2' to '10' numbers would you like?`);
};
    arrLength = Math.abs(arrLength);
    arrLength = Math.round(arrLength);

    minValue = prompt(`Enter minimum value of array from '-10' to '10'`);
while (!minValue || isNaN(minValue) || minValue > 10 || minValue < -10) {
    minValue = prompt(`Enter minimum value of array from '-10' to '10'`);
};
    minValue = Math.round(minValue);

    maxValue = prompt(`Enter maximum value of array from '${minValue}' to '50'`);
while (!maxValue || isNaN(maxValue) || maxValue > 50 || maxValue <= minValue) {
    maxValue = prompt(`Enter maximum value of array from '${minValue}' to '50'`);
};
    maxValue = Math.round(maxValue);
for (let i = 1; i <= arrLength; i++) {
    arr[arr.length] = Math.round (Math.random()* (maxValue - minValue + 1) + minValue);
};
console.log(arr);
for (let i = 0; i <= arrLength-1; i++) {
    if (arr[i] <= maxValue) {
        minArrValue = maxValue = arr[i];
    };
    if (arr[i] >= minValue) {
        maxArrValue = minValue = arr[i];
    };
};
console.log(minArrValue);
console.log(maxArrValue);
let indexMinValue = arr.indexOf(minArrValue);
    indexMaxValue = arr.indexOf(maxArrValue);
    [arr[indexMinValue], arr[indexMaxValue]] = [arr[indexMaxValue], arr[indexMinValue]];
console.log(arr);



    