function diffArray(arr1, arr2) {
    const newArr = [];
    arr1.forEach(element => {
        if (!arr2.includes(element)) {
            newArr.push(element);
        }
    });
    arr2.forEach(element => {
        if (!arr1.includes(element)) {
            newArr.push(element);
        }
    })

    // return arr1.filter(element=>{!arr2.includes(element)}).concat(arr2.filter(element=>!arr1.includes(element)));
    return newArr;
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
