function compareArrays(arr1, arr2) {
    let result = false;

    if (arr1.length !== arr2.length) {
        return result;
    }

    result = arr1.every((currentValue, index) => {
        return currentValue === arr2[index];
    });

    return result;
}

function advancedFilter(arr) {

    return arr.filter((val) => {
        return val > 0 && val % 3 === 0;
    }).map((filteredVal) => {
        return filteredVal * 10;
    });
}
