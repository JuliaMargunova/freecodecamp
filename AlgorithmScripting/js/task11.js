let find=(array, element)=> {
  return  (array.indexOf(element)===-1)?"dddd":array.indexOf(element);
   //return array.forEach((i,a)=>i===element?a:"Not found")
}

    var array = [2,3,5,7,11];
  console.log (find(array, 7));
   