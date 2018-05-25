/* returns true if a number is even and greater than 10 */

function isEvenAndGreaterThanTen(num) {
  // your code here
  if (num > 10 && num%2 === 0) {
    return true;
  } else {
    return false;
  }
}

isEvenAndGreaterThanTen(14)
