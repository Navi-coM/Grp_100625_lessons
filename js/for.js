'use strict';



// 1 ----- FOR ---------------------

// let numb = 0;
// ++numb;
// ++numb;
// ++numb;
// ++numb;
// ++numb;
// ++numb;
// ++numb;
// ++numb;
// ++numb;
// ++numb;
// console.log(numb);

// for(start; condition; step) {block loop} - схема робота циклу
// let i = 2;
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }
// console.log(i);


// 2. While(умова) --------------

let i = 11;  // Стартове значення

//  while(i <= 10) {  // умова перевірки
//    console.log(i);  // тіло циклу
//    i++;              //крок
//  }

// 3. Do While ---------------

// do {
//   console.log(i);
//   i += 2;
// } while (i <= 10);

// 4. for...of (Array)--------------------

let arrNames = ['Iryna','Alina','Vladik'];
// console.log(arrNames.length);

// for(let name of arrNames) {
//     console.log(name);
    
// }

// 5. for...in (Object)----------------------


let student = {
    name:'Anna',
    age: 27,
    city: 'Kyiv'
}

// for(let key in student) {
//     console.log(key);
//     console.log(student[key]);
// }

// ---------------- break continue------

// break - повністю зупиняє виконання циклу
// continue - пропускаю поточну ітерацію

// for(let i = 0; i <= 5; i++) {
//     if(i === 3 || i === 4) continue;
//     console.log(i);
// }

// for(let i = 0; i <= 20; i++) {
//     if(i % 2 === 0) continue;
//     console.log(i);
// }

// ================================ ForEach ==============================

arrNames.forEach(name => console.log(name.length));
