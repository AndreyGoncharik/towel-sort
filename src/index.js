module.exports = function towelSort (matrix) {
  let arr = [];
 
  if (arguments.length > 0) {
    matrix.forEach((el, ind) => {
    ind%2 == 0 ? el.forEach((i) => arr.push(i)) : el.reverse().forEach((i) => arr.push(i))
    });
  }
  return arr;
};
