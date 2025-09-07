'use strict';

const obj = {};              //літерал об'єкту
const obj_1 = new Object();  // конструктор об'єкту



// function Object() {
//     let obj = {};
// }

const student_1 = {
    // key: value ,    property (властивості)
    name: 'Anastasija',
    surName: 'Poljatskova',
    age: 20,
    isProgrammer: true,
    skills: ['java', 'html', 'css', 'js'],

    // methods
    sayHello: function() {
        alert(`Hello my favorite and strong Teacher from ${this.name}!`);
    },

    getFullName() {
        console.log(`${this.name} ${this.surName}`);
    }
}

// console.log(student_1.name);
// console.log(student_1.age);
// console.log(student_1['isProgrammer']);

// student_1.sayHello();

// const student_2 = {
//     name: 'Igor',
// };
// console.log(student_2);

// student_2.name = prompt('Enter your name');

// console.log(student_2);

delete student_1.skills;

// console.log(student_1);

// student_1 = {};

// console.log(student_1);

// -------------------------- перевірка властивостей в об'єкті -----------------

// console.log('city' in student_1);


// student_1.city = prompt(`Enter your city`);
// console.log(student_1);

const blockForValue = document.getElementById('value');

function isTrueValue(key, obj) {
    // let partString = obj;
    if(key in obj) {
        blockForValue.innerHTML = `<p>${key} - такий ключ існує в об'єкті</p>`;
        
    } else {
        blockForValue.innerHTML = `<p>Такого ключа не існує!</p>`;
    }
    // console.log(partString);
}

//  isTrueValue('userAge', student_1);
//  Ссилочний тип даних - приклад------------------

let obj_2 = {
    login: 'asd',
    password: '123'
}

let obj_3 = obj_2;
// console.log(obj_3);

obj_3.role = 'admin';
// console.log(obj_2);

// // --------------Object.keys, Object.values, Object.entries-----------------------------------------

const user = {
    name: 'Oleh',
    email: 'asdasd@mail.com',
    country: 'Ukraine',
    city: 'Dnipro',
}

user.isRole = 'admin';
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));



// ---------------for in----------

// for(let key in user) {
//     console.log(`${key}: ${user[key]}`);
// }

// -------------- Копіювання об'єктів ------------

let newUser2 = user;
let newUser = {};

// 1. Через for in -

for(let key in user) {
    newUser[key] = user[key]
}
// console.log(newUser);
// console.log(newUser === user);
// console.log(newUser2 === user);


// 2. Object.assign() -----------------

let newStudent2 = Object.assign(student_1);

// console.log(newStudent2);
// console.log(newStudent2 === student_1);

// newStudent2.gender = 'woman';
// console.log(student_1);


let newObj1 = {
    itSchool: 'Beetroot',
    surName: 'Aksanova',
    gender: 'female',
}

let newObj2 = {
    gender: 'male',
}

Object.assign(newObj1, newObj2);

console.log(newObj1);

// ... spread ------------

const mentor = {
    name: 'Ivan',
    age: 42
}

const copyMentor = { ...mentor, ...newObj1, ...newObj2};

console.log(copyMentor);
console.log(copyMentor === mentor);

// "name":"Ivan",
// "age":"41",

// JSON.parse
// JSON.stringify

function updateClock() {
    const currentTime = new Date();
    const blockCurrentTime = document.getElementById('clock');

    let currentHours = currentTime.getHours().toString().padStart(2, '0');
    let currentMinutes = currentTime.getMinutes().toString().padStart(2, '0');
    let currentSeconds = currentTime.getSeconds().toString().padStart(2, '0');
    blockCurrentTime.textContent = `${currentHours}:${currentMinutes}:${currentSeconds}`;

}

setInterval(updateClock, 1000);