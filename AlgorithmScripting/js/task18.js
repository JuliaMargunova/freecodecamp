function giveMeFive(obj){
    let mas=[];
    for(let key in obj){
      if(key.length===5){
        mas.push(key);
      }
      if(obj[key].length===5){
        mas.push(obj[key]);
      }
    }
    return mas;
  }