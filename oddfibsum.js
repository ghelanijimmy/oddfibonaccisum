function sumFibs(num) {
  let tnum = 1;
  let acc = 1;
  let arr = [];
  for(var i = 1; i<=num; i++){
    
    let test = tnum;
    acc = tnum + acc;
    tnum = acc - tnum

    if(test%2 !== 0){
      if(test<=num){
        arr.push(test)
      }
      
    }
    console.log(arr)
  }
  
  return arr.reduce((a,c)=>a+c);
}

sumFibs(1000);