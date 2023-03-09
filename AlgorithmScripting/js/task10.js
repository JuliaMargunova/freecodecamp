
function describeAge(age) {
   let a = (age <= 12)? "kid":((age >= 13 && age <= 17)? "teenager":((age >= 18 && age <= 64)? "adult": "elderly"));
   return "You're a(n) "+a;  
}
console.log(describeAge(65));