//Sum All Numbers in a Range
function sumAll(arr) {
    let startRange = arr[0];
    let endRange = arr[1];
    let sum = 0;
    if (startRange > endRange) {
        startRange = arr[1];
        endRange = arr[0];
    }
    for (startRange; startRange <= endRange; startRange++) {
        sum += startRange;
    }
    return sum;
}

sumAll([1, 4]);