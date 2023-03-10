// function findOdd(A) {
    
//     for (let i = 0; i < A.length; i++) {
//        if( A.filter((el)=>el===A[i]).length%2){
//         return A[i];
//        }
//     }
// }


function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
//   doTest([1,1,2], 2);
//   doTest([0,1,0,1,0], 0);
//   doTest([1,2,2,3,3,3,4,3,3,3,2,2,1], 4);