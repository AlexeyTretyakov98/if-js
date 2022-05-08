let user = 'John Doe';
console.log(user);

let student = 'Alexey Tretyakov';
console.log(student);
student = user;
//user
console.log(user);
let test = 1;
test++;
test = test + '1';
//21
console.log(test);
test--;
//20
console.log(Boolean(test));
test = String(true);
//true
console.log(test);
console.log(typeof test);

let arr = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}
let arrTwo = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrTwo.length; i++) {
    if (arrTwo[i] > 5 && arrTwo[i] < 10) {
        console.log(arrTwo[i]);
    }
}
let arrThree = [2, 3, 5, 8];
let result = 0;
for (let i = 0; i < arrThree.length; i++) {
    result = result * arrThree[i];
}
console.log(result);