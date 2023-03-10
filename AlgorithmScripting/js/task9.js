function duplicateCount(text) {
    let str = text.toLowerCase();
    let newStr = str;
    let result = '';
    let count = 0;
    let symbol = '';
    for (let i = 0; i < str.length; i++) {
        symbol = str[i];
        newStr = newStr.substring(1);
        if (newStr.includes(symbol)) {
            if (!result.includes(symbol)) {
                count++;
                result += symbol;
            }
        }
    }
    return count;
}

function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }
console.log(duplicateCount("fabaaae"));