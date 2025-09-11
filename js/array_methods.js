'use strict';

// Методи долдавання і видалення ---------------

// 1. POP, PUSH  (stack)----------------

let arrNumb = [1,2,3,4,5];

// console.log(arrNumb);

// let newNumber = prompt('Enter number');

// arrNumb.push(newNumber);
// console.log(arrNumb);


// let newArrNumb = arrNumb.pop();
// console.log(newArrNumb);
// console.log(arrNumb);

// 2. Shift, Unshift (черга) ----------------

// let newArrNumb_2 = arrNumb.shift();

// console.log(newArrNumb_2);

// arrNumb.unshift(100);

// console.log(newArrNumb_3);
// console.log(arrNumb);


// ----------- Splice, Slice -----------

// 1. Splice (додає, видаляє, заміняє)---- 

let strWords = 'I like Beetroot every day';
// console.log(strWords);
let arrStrWords = strWords.split(' ');
// let arrStrWords = Array.isArray(strWords);
// console.log(arrStrWords);


// arrStrWords.splice(0, 1, studentName);
// console.log(arrStrWords);


// 2 Slice ----------------------

// arr.slice(start, end);

// let studentName = 'Igor';
// let lettersStudentName = studentName.split('');
// console.log(lettersStudentName);
// let newLetters = lettersStudentName.slice(1, 4);
// console.log(newLetters);


// ------------ Варіантии зробити масив порожнім --------

// 1 arrStrWords = [];
// 2 arrStrWords.splice(0);
// 3 arrStrWords.length = 0;

// console.log(arrStrWords);


// -----------------3. Concat ---------------

let arrNumb_3 = [8,9,10];
let arrNumb_5 = [20,21];
arrNumb_3.concat(arrNumb);

let arrNumb_4 = arrNumb.concat(arrNumb_3, arrNumb_5);

console.log(arrNumb_4);

// ------------------4.  Map ----------------

let arrSquareNumbs = arrNumb_4.map(numb => numb ** 2);

console.log(arrSquareNumbs);
console.log(arrNumb_4);

let quantityLetters = arrStrWords.map(item => item.length);
console.log(quantityLetters);

// --------------- 5. Filter -------------------------

let arrStudent = [
    { id: 1, name: 'Igor', isStudy: true },
    { id: 2, name: 'Anna', isStudy: true },
    { id: 3, name: 'Viktorija', isStudy: false }
]

// let someStudent = arrStudent.filter(item => item.name === 'Vanna');
// let someStudent_2 = arrStudent.filter(item => item.id === 3);
// let someStudent_3 = arrStudent.filter(item => item.name.length <= 4);
let errorStudents = arrStudent.filter(item => item.isStudy === false);

console.log(errorStudents);


// ---------------- 6. Sort -----------------------

let arrFoods = ['milk', 'bread', 'beer'];
let arrNumbs = [4, 2, 6, 1];

console.log(arrNumbs.sort((a,b) => a - b));
console.log(arrFoods.sort());


// ----------------- 7. Reduce -----------------

// arrNumb_2.reduce(function(accumulator, item, index, array));

let arrSalary = [1500, 2000, 800, 500];
const premija = 1000;

let result = arrSalary.reduce(function(sum, salary) {
    return sum + salary;
}, premija);

console.log(result);
