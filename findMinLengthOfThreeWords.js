/* finds the minimum length of three strings */

function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var n = word1.length;
  var n2 = word2.length;
  var n3 = word3.length;

  return Math.min(n, n2, n3);
}

findMinLengthOfThreeWords('a', 'be', 'see');
