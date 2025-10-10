"use strict";

// _ - protected (іншому програмісту не можна це змінювати);
// # - private(захищена властивість JS, не змінюється);


class Student {
    constructor(name, city, course = 'front-end') {
        this.name = name;
        this.city = city;
        this.course = course;
    }
    sayHello() {
        alert(`Hello ${this.name}`)
    }
}

class Bachelor extends Student {
    constructor(name, city, course = 'front-end', age, isBachelor) {
        super(name, city, course);
        this.age = age;
        this.isBachelor = isBachelor;
    }
    #itAcademy = `Beetroot Academy`;
}

let bachelorOksana = new Bachelor('Oksana', 'Kharkiv', undefined, 18, true);

console.log(bachelorOksana);
bachelorOksana.city = 'New-York';
console.log(bachelorOksana);
// bachelorOksana.#itAcademy = 'Step'; // Змінити не можливо

// ----------------------------

class Button {
    constructor(value, width, height, padding,  className, borderRadius, background) {
        this.width = width;
        this.height = height;
        this.padding = padding;
        this.value = value;
        this.className = className;
        this.borderRadius = borderRadius;
        this.background = background;
    }

    render() {
        let btn = document.createElement('button');

        btn.style.width = `${this.width}px`;
        btn.style.height = `${this.height}px`;
        btn.style.padding = `${this.padding}px`;
        btn.style.borderRadius = `${this.borderRadius}px`;
        btn.style.background = this.background;

        btn.innerText = this.value;
        btn.classList.add(this.className);

        return btn;
    }
}

const blockForButtons = document.querySelector('#all-buttons');

const btnSend = new Button('Send', 130, 44, 8, 'btn', 6, '#5a864f');
const btnReset = new Button('Reset', 130, 44, 8, 'btn', 6, '#e0662e');
const btnCreate = new Button('Create', 130, 44, 8, 'btn', 6, '#137bc5');

blockForButtons.append(btnSend.render());
blockForButtons.append(btnReset.render());
blockForButtons.append(btnCreate.render());

class ButtonBorder extends Button {
    constructor(
        value, 
        width,
        height, 
        padding,  
        className, 
        borderRadius, 
        background,

        border,
        boxShadow
    ) {
        super(value, width, height, padding,  className, borderRadius, background);
        this.border = border;
        this.boxShadow = boxShadow;
    }

    render() {
        let btnWithBorder = super.render();
        btnWithBorder.style.border = this.border;
        btnWithBorder.style.boxShadow = this.boxShadow;

        return btnWithBorder;
    }
}

const btnMore = new ButtonBorder('More Info',  130, 44, 8, 'btn', 6, '#5a864f28', '1px solid #ffccff', '#ffddff, 0 0 5px 2px');
blockForButtons.append(btnMore.render());

// --------------------------Універсальний Клас для створення HTML елементів-------------------------------------

class ElementCreater {
  constructor(tagName) {
    this.element = document.createElement(tagName);
  }

  setText(text) {
    this.element.textContent = text;
    return this;
  }

  setHTML(html) {
    this.element.innerHTML = html;
    return this;
  }

  setAttr(name, value) {
    this.element.setAttribute(name, value);
    return this;
  }

  addClass(className) {
    this.element.classList.add(className);
    return this;
  }

  setStyle(property, value) {
    this.element.style[property] = value;
  }

  appendTo(parentEl) {
    if (typeof parentEl === "string") {
      document.querySelector(parentEl).appendChild(this.element);
    } else {
      parentEl.appendChild(this.element);
    }
    return this;
  }

  getElement() {
    return this.element;
  }
}


const newBlock = new ElementCreater("div")
  .setHTML(`<p>Beetroot Academy is the Best!!</p>`)
  .addClass(`new-block`)
  .setAttr("id", "my-block")
  .appendTo("body");

const newLink = new ElementCreater("a")
  .setText(getText()) 
  .addClass(`section__link`)
  .setAttr("href", "https://google.com")
  .appendTo(".new-block");


function getText() {
    let getTextFromResource = 'Ukraine is Win!';
    return getTextFromResource;
}

