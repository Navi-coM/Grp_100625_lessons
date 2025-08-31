'use strict';

// --------------------- Operators (Оператори) ------------------

// Математичні оператори --------------
// +, -, *, /, **, % -------------

// let numb = prompt('Enter som number from 1 to 100','');
// let numbPower = prompt('Enter som number from 1 to 100','');
// let squareNumb = numb ** numbPower;
// console.log(squareNumb);

// let remainderNumb = numb % 2;  
// console.log(remainderNumb);

// let arrNumbs = [1,2,3,4,5,6,7];

// arrNumbs.forEach(numb => {
//     if(numb % 2 !== 0) {
//         console.log(numb);
//     }
// })



// -------------------------------------------

// || - або, працює до першої істини (true), якщо немає true 
    // ,то повретає останнє значення
// && - i, працює до першої лжи (false), якщо немає false , 
// то поверне останнє значення
            //false true false
// let someVar = 0 || '' || -0;
// console.log(someVar);


// let someVar_2 = true && 'MArina' && '';
// console.log(someVar_2);


// console.log(Number(NaN));

// console.log((0.1 + 0.2) === 0.3);


let someExersices = NaN && (' ' || null) && -1;    //  -0 ?? Boolean(NaN);
// console.log(Boolean(someExersices));

// console.log(0 === -0);

// 0, null, undefined, '', NaN - false


// Оперпатори порівняння -------------
// >, <, >=, <=, ==, ===, !=, !==

let res = 3 <= 3; //3 < 3; 3 = 3;
let res_2 = 3 >= 2; // 3 > 2 , 3 = 2;
let res_3 = 8 >= 10; // 8 > 10,  8 == 10

// console.log(res);
// console.log(res_2);
// console.log(res_3);

// true false - true
// false true - true
// false false - false

let res_4 = '8' == 8;
let res_5 = '8' === 8;

// console.log(res_4);
// console.log(res_5);

let res_6 = null == undefined;
let res_7 = null === undefined;

// console.log(res_6);
// console.log(res_7);

let res_8_2 = NaN;
let res_8 = NaN;
let rezFinish = res_8_2 === res_8;
let res_9 = (typeof NaN) === (typeof NaN); //number
// console.log(res_8);
// console.log(res_9);
// console.log(rezFinish);

let res_10 = undefined === undefined;
// console.log(res_10);


let res_11 = '8' !== 8;
// console.log(res_11);


let res_12 = 'сок' < 'сол';
// console.log(res_12);


// ------------// increment, decrement---------------

let incr = 11;
// 1) incr = incr + 1;
// 2) incr +=1;
// 3) incr++;
// 4) ++incr;

// console.log(incr);

let decr = 3;
// 1)decr = decr - 1;
// 2)decr -= 1;
// 3) decr--;
// 4) --decr;
// console.log(decr);
               // 8
// let res_13 = 8 + incr++;
// console.log(res_13);
// console.log(incr);
//             11         11       12
let res_14 = incr++ + --incr - ++incr;             // ++
let res_15 = incr++ + 10;   
let res_16 = incr + 10;         
            // 11 + 10
// incr = 8
// incr = 7    11 + ((11 + 1) - 1) - (11 + 1);
// incr = 8
// incr = 9
// ((inc + --inc) - ++inc)++= 9
// console.log(res_14);
// console.log(incr);

console.log(res_14);
console.log(res_15);
console.log(incr);

console.log(res_16);

