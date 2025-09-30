'use strict'

// localstorage - об'єкт, який зберігає дані в браузері навіть після закриття сторінки
// sessionstorage - об'єкт, який зберігає дані в браузері до закриття сторінки

// Вони не відправляють дані на сервер
// Приблизний об'єм 5 Мб

// -----------------------1. LocalStorage -------

// localStorage.setItem('','')
// localStorage.getItem('')
// localStorage.removeItem('');
// localStorage.clear();
// localStorage.key();
// localStorage.length;


const arrStudents = ['Igor', 'Alex', 'Voktorija', 'Yulianna', 'Sveta'];

const userAdmin = {
    adminName: 'Anton',
    role: 'admin',
    password: '123456'
}
const userAge = 42;

localStorage.setItem('studentTodayLesson', arrStudents);
localStorage.setItem('userAdminData', JSON.stringify(userAdmin));
localStorage.setItem('userage', userAge);


console.log(localStorage.getItem('userAdminData'));
console.log(localStorage.getItem('studentTodayLesson'));
// localStorage.removeItem('userage');
// localStorage.clear();

// if (localStorage.length != 0) {
//     let someKey = JSON.parse(localStorage.getItem(localStorage.key(2)));
//     console.log(someKey);
// } else {
//     console.log(`LocalStorage is empty!`);
// }

// ------------------------  Отримання наяаних ключів у storage ----------------

let storageKeys = Object.keys(localStorage);
let lastIndexKeys = storageKeys.length - 1;

console.log(storageKeys);
console.log(lastIndexKeys);


// ---------------------------- Click Storage -----

const btnClick = document.querySelector('#btn-click');
const btnClearStore = document.querySelector('#btn-clear');
const countClickTitle = document.querySelector('#count-amount');
let amountClick = 0;

function addCountClickStorage() {
    amountClick++;
    localStorage.setItem('amountClick', amountClick);
}

function getCountClickStorage() {
    let amountClickStorage = localStorage.getItem('amountClick');
    countClickTitle.innerHTML = amountClickStorage;
}

function clearCountClickStorage() {
    localStorage.removeItem('amountClick');
    countClickTitle.innerHTML = amountClick = 0;
}

btnClick.addEventListener('click', addCountClickStorage);
btnClick.addEventListener('click', getCountClickStorage);
btnClearStore.addEventListener('click', clearCountClickStorage);

// -------------------- Емуляція зміни теми -----------------------

const btnChangeTheme = document.querySelector('.btn_change-theme');
const btnResetTheme = document.querySelector('.btn_reset-theme');
const blockBody = document.body;

function changeTheme() {
    blockBody.classList.toggle('body_dark');

    if (blockBody.classList.contains('body_dark')) {
        localStorage.setItem('pageTheme', 'dark')
    } else {
        localStorage.setItem('pageTheme', 'light')
    }
}

function resetPageTheme() {
    if (blockBody.classList.contains('body_dark')) {
        localStorage.removeItem('pageTheme');
        blockBody.classList.remove('body_dark');
    }
}

btnChangeTheme.addEventListener('click', changeTheme);
btnResetTheme.addEventListener('click', resetPageTheme)