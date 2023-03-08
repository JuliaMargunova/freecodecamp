function chromosomeCheck(sperm) {
    let answer ='';
    if(sperm==='XY'){
      answer = "Congratulations! You're going to have a son.";}
    else if(sperm==='XX') {answer = "Congratulations! You're going to have a daughter."};
    
    return answer;
  }