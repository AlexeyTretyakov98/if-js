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
 console.log(palindrome(''))

function palindrome(str) {
   return str == str.split('').reverse().join('');
 }
 console.log(palindrome('шалаш'));




 function  filter (num) {
   for (let i = 0; i < num.length; i++) {
    if (String(num[i]).includes('0')) {
       num[i] = String(num[i]).replaceAll('0', 'zero');
     }
  }
   return num;
 }
 let num = [];
 for (let i = 0; i < 10; i++) {
  num[i] = Math.round(Math.random() * 100);
 }

 filter(num);
 console.log(num)













