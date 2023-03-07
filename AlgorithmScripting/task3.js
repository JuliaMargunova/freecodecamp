function destroyer(arr, ...moreArgs) {
    return arr.filter(i => !moreArgs.includes(i));
}
 destroyer([1, 2, 3, 1, 2, 3], 2, 3);
