const nums = [1,2,3,4];
// const val = nums.reduce((acc,curr,i,arr)=>{
//   return acc + curr;
// },0);

Array.prototype.myReduce = function(cb,initialValue){
  let defaultInitialValue = initialValue || 0;
  let acc = defaultInitialValue;
  for(let i=0; i<this.length; i++){
    acc = cb(acc,this[i],i,this);
  }
  return acc;
}

const val = nums.myReduce((acc,curr,i,arr)=>{
  return acc + curr;
})

console.log(val);