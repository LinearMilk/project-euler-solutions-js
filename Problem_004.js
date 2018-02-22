// A palindromic number reads the same both ways. The largest palindrome made from the product
// of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function findLargestPalindrome(number){
  var bigNumber=number*number;
  for (i=bigNumber;i>0;i--) {
    if(isPalindrome(i)){
      if(isProductof3(i)) return i;
    }
  }
  return 0;
}

function isProductof3(i){
  for(k=100;k<1000;k++){
    if(i%k==0 && (i/k).toString().length == 3) return true;
  }
  return false;
}

function isPalindrome(number) {
  var num = number.toString();
  var counter = Math.floor(num.length/2);
  for (j=0;j<=counter;j++) {
    if (num[j]!=num[num.length-1-j]) {
      return false;
    }
  }
  return true;
}

console.log(findLargestPalindrome(999));
