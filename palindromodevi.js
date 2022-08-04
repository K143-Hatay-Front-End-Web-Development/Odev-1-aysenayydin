function isPalindrome(x) {
    x = x.toString().split('')
    let len = x.length;
    for (let i = 0; i < len / 2; i++) {
        if (x[i] !== x[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
function palindromic() {
    let largest = 0;
    for(let i = 999; i > 99; i--) {
      for(let j = 999; j > 99; j--) {
        let n = i * j;
        if (isPalindrome(n)&& n > largest) {
          largest = n;
        }
      }
    }
    return largest;
  }
  console.log(palindromic());