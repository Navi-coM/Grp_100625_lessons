'use strict';

let student_1 = {
    name: 'Anton',
    age: '32',
    course: 'front-end',
    sayGoodbye() {
        alert(`time to say Goodbye!`)
    }
}

let student_2 = {
    name: 'Oksana',
    age: '27',
    course: 'front-end',
    sayGoodbye() {
        alert(`time to say Goodbye!`)
    }
}

// console.log(student_1);
// console.log(student_2);
// student_1.sayGoodbye();
// student_2.sayGoodbye();

// ------ DRY (ont repeat yourself) -------------------


// -------- До Класів було так -------------------

// function Student(name, age, course) {
//     this.name = name;
//     this.age = age;
//     this.course = course;
//     this.sayGoodbye = function () {
//         alert(`time to say Goodbye ${this.course}!`)
//     }
// }

// let student_3 = new Student('Igor', 33, 'front-end');
// let student_4 = new Student('Yuilianna', 23, 'front-end');
// let student_5 = new Student('Natalie', 33, 'front-end');

// console.log(student_3);


// -------------------------- Нарешті з'явилися Class ----------

// Class === Function

// gender, height, weight, color, age, color_hair

class Student {
    constructor(id, name, city, course = 'front-end', lang = 'ukr') {
        this.id = id;
        this.name = name;
        this.city = city;
        this.course = course;
        this.lang = lang;
    }
    sayHello () {
        console.log(`Hello ${this.name} from ${this.city}`);
    }
}

// console.log(typeof Student);

// let student_6 = new Student(1, 'Victoriya', 'Dubai');
// console.log(student_6);

// ----------------- Class Expression ------------

let Car = class {
    constructor(title, model, color, speed, age) {
        this.title = title;
        this.model = model;
        this.color = color;
        this.speed = speed;
        this.age = age;
    }

    maxSpeed() {
        console.log(`${this.speed * 1.1} km/h`);
    }

    get fullTitle() {
        return `${this.title} ${this.model}`;
    }
}

let audiCar = new Car('Audi', 'RS Q8', 'grey', '240', '1 year');

// console.log(audiCar.fullTitle);
// console.log(audiCar.title);
// console.log(audiCar.maxSpeed());


// audiCar.fullTitle = 'Mercedes';
// console.log(audiCar.fullTitle);

// audiCar.title = 'BMW';
// console.log(audiCar.fullTitle);
// ---------------------------------------------------

class Food {
    constructor(title, price, amount) {
        this.title = title;
        this._price = price;
        this.amount = amount;
    }

    get price() {
        return `${this._price.toFixed(1)} грн`;
    }

    set price(newPrice) {
        if(newPrice <= 0) {
            console.log(`Price is not defined`);
        } else {
            this._price = newPrice;
        }
    }
}


let bread = new Food('bread dark', 30.25, 2);

console.log(bread.price);
bread.price = 0;
console.log(bread.price);
// bread.price = 15;

// console.log(bread);
bread.price = 0;
bread.title = 30;

console.log(bread);
