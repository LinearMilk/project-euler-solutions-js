// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function findSmallestMultiple(number){
  for (i=2;i<Number.MAX_SAFE_INTEGER;i=i+2) {
    for (j=3;j<=number;j++) {
      var isDivisible = true;
      if (i%j !=0) {
        isDivisible=false;
        break;
      }
      if (isDivisible && j==number) return i;
    }
  }
  return 0;
}



console.log(findSmallestMultiple(20));
