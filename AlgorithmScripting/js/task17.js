function multiply(number){
    let n = String(Math.abs(number)).length;
    for(i=0;i<n;i++){
      number *=5;
    }
    return number;
  }

//   multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹