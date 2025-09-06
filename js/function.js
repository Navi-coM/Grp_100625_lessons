'use strict';
// helloUserMessage();

// ----------------- Function ----------------

// Онсновнмй будівельний блок коду, який повторно можна використовувати.

// 1) Function Declaration -  оголошення функції
// 2) Function expression -  функціональний вираз
// 3) Arrow Function -  стрілкова функція

// 1) Function Declaration --------------------

// function name(params) {block function}
// let someVar = 123;

function helloUserMessage() {
    var textMessage = 'Hello my favorite students';
    let sum = 1 + someVar;
    alert(textMessage);
    console.log(sum);
}

// helloUserMessage();  - виклик функції
// let userName = prompt(`Enter your name`);


// function helloUserName(userName) {
//     // let userName = 'Anna';
//     userName = prompt(`Enter your name`);
//     alert(`Hello ${userName}`);
// }

// helloUserName('Igor');
// helloUserName('Anna');/


// 2) Function Espression --------------
// console.log(sum()); - не працює

let sum = function() {
    let num_1 = 3;
    let num_2 = 5;

    return num_1 + num_2;

    // let num_3 = 10;   - не буде виконано
    // console.log(num_3); - не буде виконано

}

// console.log(sum());


let sum_2 = function() {
    let result = 0;
    for(let numb of arguments) {
        result += numb;
    }
    return result;
}

// console.log(sum_2(1,3,5,7,9));
// console.log(sum_2(1,3));


// 3) Arrow Function (стрілкова функція) ------------// 
// 
// let multiply = function(numb_5 , numb_6) {
//     return numb_5 * numb_6
// }

let multiply_2 = (numb_5, numb_6) => numb_5 * numb_6;

// console.log(multiply_2(2,4));


// 4) Самовикликаюча функція ---------------

// let multiply_3 = ((numb_5, numb_6) => console.log(numb_5 ** numb_6))(2, 2);

// 5 Callback функції -------------------

const calcNumberSquare = num => num ** 2;
const calcDivideTwo = num => num / 2;

const arrNumbers = [1,2,3,4,5];
const arrNumbers_2 = [2,4,6,8];

function changeArrNumbs(arr, callback) {
    let newArrNumbs = [];

    for(let i = 0; i < arr.length; i++) {
        newArrNumbs.push(callback(arr[i]))
    }
    return newArrNumbs;
}

// console.log(changeArrNumbs(arrNumbers_2, calcNumberSquare));
// console.log(changeArrNumbs(arrNumbers, calcDivideTwo));


// let watchSecondMessage = setInterval(() => console.log(`3 second`), 3000);

// setTimeout((clearInterval(watchSecondMessage)), 9000);


let showArgs = (...args) => console.log(args);


// showArgs(1,2,3);
// showArgs();
// showArgs(1,2,4,5,6,7,8);

let arrNumbers_3 = [1,2,3,4,5,6,7];

let squaresNumbers = arrNumbers_3.map(num => num * num);

console.log(squaresNumbers);
console.log(arrNumbers_3);

// --------------------------- Рекурсивна функція ---------------------

// Функція викликає сама себе до моменту припинення виконання (base case) - умова зупинки

// 1  5

// 1 * 2 * 3 = 6  
// 1 * 2 * 3 * 4 * 5 = 120 

function factorial(numb) {
    if(numb === 0 || numb === 1) {
        return 1;
    } else if ( numb < 0) {
        console.log(`Такого факторіалу не існує`);
        return;
    }
    return numb * factorial(numb - 1);
}
console.log(factorial(5));
// function User(name) {
//     this.name = name;
// }

// let userIvan = new User('Ivan');

// console.log(userIvan);
