// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
function largestPrime(number){
  var largestPrimeNum = 1;
  //var squareRoot = Math.sqrt(number);

  for (var k=2; k <=number; k++) {
    console.log(k);
    if (number%k==0 && isPrime(k)) {
    	//console.log(k);
      largestPrimeNum = k;
    }
  }
  return largestPrimeNum;
}

function isPrime(number) {
  if(number==1 || number==2 || number==3 || number==5 || number==7 || number==11 || number==13 || number==17 || number==19) return true;
  if(number%2==0 || number%3==0 || number%5==0 || number%7==0 || number%11==0 || number%13==0 || number%17==0 || number%7==19) return false;
  var squareRoot = Math.sqrt(number);
  for (var i=2; i <squareRoot; i++) {
    if (number%i==0 ) {
      return false;
    }
  }
	console.log(i);
  return true;
}


  console.log(largestPrime(600851475143));
