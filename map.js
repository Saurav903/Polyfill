Array.prototype.myMap = function(cb){
  let temp = [];
  for(let i=0; i<this.length; i++){
    temp.push(cb(this[i],i,this));
  }
  return temp;
}

let nums = [1,2,3,4];

const multiply = nums.myMap((num,i)=> num*2);

console.log(multiply);