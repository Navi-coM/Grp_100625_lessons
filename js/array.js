'use strict';


// --------------------- Array ----------------

// 1. Індекси замість ключів
// 2. Масив - це як правило однотипні дані
// 3. length = останный індекс + 1

// Як створити масив ---------------

// 1) let arr = [];  літерал
// 2) let arr_2 = new Array();  

let arrFoods = ['bread', 'milk', 'beer', 'sausage'];

let user = {
    name: 'Anton',
    isPtogrammer: true
}

// console.log(arrFoods);
// console.log(typeof arrFoods);
// console.log(typeof user);
// console.log(user.length);
// console.log(Array.isArray(arrFoods));
// console.log(arrFoods.length);
// console.log(arrFoods[3]);


arrFoods[arrFoods.length] = 'meat';
// console.log(arrFoods.length);
// console.log(arrFoods[22]);

//  delete arrFoods[2]; // краще не використовувати
// console.log(arrFoods);


// -----------------Як додавати дані в масив--------------------

let someFoods = ['whiskey', 'rom', 'gin'];


arrFoods.push(someFoods);

// console.log(arrFoods[5][1]);

// -----------------------------------------------------------

let arrFoods_2 = [
    {
        name: 'bread',
        amount: 2,
        isBought: false
    },
    {  name: 'milk',
        amount: 3,
        isBought: true
    },
    {
        name: 'beer',
        amount: 2,
        isBought: false
    }
]

console.log(arrFoods_2);

arrFoods_2[1].amount = 1;

console.log(arrFoods_2);

const btnAddFood = document.getElementById('btn_amount');
const blockAmount = document.getElementById('amount');
const nameFood = document.getElementById('name-food');
const amountFood = document.getElementById('amount-food');
const boughtStatus = document.getElementById('bought-food');

function checkAmountFood() {
    let nameFoodValue = nameFood.value;
    let amountFoodValue = amountFood.value;
    let boughtStatusValue = false;

    // let arrFoods_3 = [];
    arrFoods_2.push({
        'name': nameFoodValue,
        'amount': amountFoodValue,
        'isBought': boughtStatusValue
    })

    for(let title of arrFoods_2) {
        blockAmount.insertAdjacentHTML('beforeEnd', `<p>${title.name}: ${title.amount} <input type="checkbox" checked></p>`);

        let inputBoughtStatus = document.createElement('input');
        console.log(inputBoughtStatus);
        
    }
    console.log(arrFoods_2);
    
}

btnAddFood.addEventListener('click', checkAmountFood);

// ------------------------------------------ пепребор масива (Цикли)---------------
// 1 For 

// for(let i = 0; i < arrFoods_2.length; i++) {
//     if(arrFoods_2[i].name === 'milk') {
//         console.log(arrFoods_2[i]);
//     }
// }

// 2 For of 

for (let title of arrFoods_2) {
    if (title.isBought === false) {
        console.log(title);
    }
}

// 3   Метод forEach ------------------

arrFoods_2.forEach(function(item) {
    let nameFoodUpper = item.name.toUpperCase();
    blockAmount.innerHTML += `<p>${nameFoodUpper}</p>`;
})

console.log(arrFoods_2);
