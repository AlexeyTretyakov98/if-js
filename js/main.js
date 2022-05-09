function sum(numOne, numTwo) {
  let calcSum = numOne + numTwo;
  return calcSum;
}
console.log(sum(5, 2));


const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const text1 = document.querySelector('#text1')
const text2 = document.querySelector('#text2')
const text3 = document.querySelector('#text3')
let index1 = 0
let index2 = 0
let index3 = 0

text1.addEventListener('click', reColor1)
text2.addEventListener('click', reColor2)
text3.addEventListener('click', reColor3)

function reColor1() {
    if(index1 === 5) {
        index1 = 0
    } else {
        index1++
        text1.style.color = colors[index1]
    }
}

function reColor2() {
    if(index2 === 5) {
        index2 = 0
    } else {
        index2++
        text2.style.color = colors[index2]
    }
}

function reColor3() {
    if(index3 === 5) {
        index3 = 0
    } else {
        index3++
        text3.style.color = colors[index3]
    }
}
