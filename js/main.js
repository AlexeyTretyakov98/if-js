let x = min(333, 55);
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(x);

let y = max(333, 55);
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(y);

// function palindrome(str){
//     let str2 = str.split('');
//     str2 = str2.reverse();
//     str2 = str2.join('');
//     if (str == str2) {
//         return true;
//     }
//         else return false;
//     {
//     }
// }
// console.log(palindrome(''))

function palindrome(str) {
  return str == str.split('').reverse().join('');
}
console.log(palindrome('шалаш'));

let nums = [12, 53, 20, 18, 22, 100, 43, 57, 50, 1];
let str1 = nums.toString();
str1 = str1.split('0').join('zero');
let numsNew = str1.split(',');
console.log(numsNew);
