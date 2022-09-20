// Задание 1
function getArrayParams(arr = [-100, 100]) {
    let min = arr[0], max = min, sum = 0,
        result = 0, avg;

    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr [i] > max) {
            max = arr[i]
        }
        if (arr [i] < min) {
            min = arr[i]
        }
        sum += Number(arr[i]);
        avg = Number((sum / arr.length).toFixed(2));
    }


    return {min: min, max: max, avg: avg};
}


// Задание 2

function makeWork(arrOfArr, func) {
    let max = 0;
    for (let j = 0; j < arrOfArr.length; j = j + 1) {
        if (func(arrOfArr[j]) > max) {
            max = (func(arrOfArr[j]));
        }
    }
    return max;
}

function worker(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i = i + 1) {
        sum += arr[i];
    }
    return sum
}


// Задание 3
function worker2(arr) {
    let min = arr[0],
        max = min, sum;
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr [i] > max) {
            max = arr[i]
        }
        if (arr [i] < min) {
            min = arr[i]
        }
        sum = Math.abs(Number((max - min)));
    }
    return sum;
}

