module.exports = function getZerosCount(number) {
  // your implementation
  var ret = 0;
  while(number){
  number = Math.floor(number/5);
  ret=ret+number;
  }
  return ret;
}
