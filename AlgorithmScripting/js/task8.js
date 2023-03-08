let newStr = 0;
function digitalRoot(n) {
    let str = String(n).split("").map((num) => {
        return Number(num)
    });
    
    newStr = 0;
    str.forEach(element => {
        newStr += element;
    });
   
    if (newStr >= 10) {
        digitalRoot(newStr);
    } 
    return newStr;
}
console.log(digitalRoot(16));
//   16  -->  1 + 6 = 7
//   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6