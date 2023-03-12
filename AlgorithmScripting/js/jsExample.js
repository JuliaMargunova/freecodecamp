function padIt(str,n){
  
    for(var i=1; i <n+1; i++){
     str = (i%2) ? '*'+str : str+'*';
  }
    return str;
  }

 console.log(padIt(padIt("a",3)));