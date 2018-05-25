/* computes summation to N */

function getSum(total, num) {
  return total + num;
}

function computeSummationToN(n) {
  var sum = 0;
  var list = [];
  
  for (i=0; i < n; i++) {
    sum += 1;
    list.push(sum);
  }
  
 return list.reduce(getSum);
}

computeSummationToN(100);
