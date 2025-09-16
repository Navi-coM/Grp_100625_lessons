'use strict';


// -----------------приклад створення коротких функцій з аргументами--------------------------

function createEl(tagName) {
    return document.createElement(tagName);
}

function createElWithAddClass(tagName, className) {
    let newEl = createEl(tagName);
    newEl.classList.add(className);
    return newEl;
}


// console.log(createEl('li'));
// console.log(createEl('a'));
// console.log(createEl('div'));

// console.log(createElWithAddClass('li', 'list-item'));
// console.log(createElWithAddClass('p', 'text'));


// ------------------ Знайти parent element по даним значенням ---------------------------

// 1. Знайти елемент у якого текстовий контент Event Lesson , далі знайти його бітьківський елемент і додати в нього новий елемент.


let allEls = document.querySelectorAll('*');
let elTextContent;

allEls.forEach(item => (item.textContent === 'Event Lesson' ? elTextContent = item : false));

let parentElTextContent = elTextContent.parentElement;

let newElLink = createElWithAddClass('a', 'section__link');

parentElTextContent.prepend(newElLink);

console.log(parentElTextContent.childNodes);
console.log(parentElTextContent.children);
console.log(parentElTextContent.firstElementChild);
console.log(parentElTextContent.lastElementChild);
console.log(parentElTextContent.previousElementSibling);
console.log(parentElTextContent.nextElementSibling);
console.log(parentElTextContent.parentElement);



