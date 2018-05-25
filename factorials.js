/* returns factorial of n */

function getProduct(total, num) {
	return total * num;
}

function computeFactorialOfN(n) {
	var x = 0;
	var num_list = [];
  for (i=0; i<n; i++) {
  	x += 1;
  	num_list.push(x);
  }
  return num_list.reduce(getProduct);
}

computeFactorialOfN(3);
