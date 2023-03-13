function splitAndMerge(string, separator) {
    let str = string.split(" ");
    for (let key in str) {
        str[key] = str[key].split('').join(separator);
    }
    return str.join(" ");
}

console.log(splitAndMerge("My name is John", "-"));
