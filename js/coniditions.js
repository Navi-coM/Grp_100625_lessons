// --------------------- Умовний оператор ------------------

// 1. If else -----------------

// if(умова) { блок виконаня} -------------
// else if(умова) { блок виконаня} 
// else { блок виконаня }


let yourItAcademy = prompt('Enter your IT Academy name');

if (yourItAcademy === 'Beetroot' || yourItAcademy === 'beetroot' || yourItAcademy === 'BEETROOT') {
    alert(`Hello our Student!!!`)
}   else if (!yourItAcademy) {
    alert(`Лошара, ти що не вмієш печатать!!!`)
} else {
    alert(`Friend, join Beetroot!`)
}

// 2 оператор ? - тернарний оператор --------------     -1    2 + 2 

// умова ? дія_1 (true) : дія_2 (false) ;

// let userAge = +prompt(`Enter your Age`);
// console.log(userAge);

// userAge >= 18 ? alert(`Ми раді вас бачити, насолоджуйтесь`) : alert(`Малюдк, бігом до мамки!`);

// let someNumb = +prompt(`Enter number`);

// let result = someNumb > 0 ? 'Позитивне'
//     : someNumb === 0 ?
//         'Нуль' : 'Негативне';

// console.log(result);


// 3. Switch Case ------------

let colorTrafficLight = prompt(`Enter color traffic light`);

switch (colorTrafficLight) {
    case 'red': alert(`Stop`);
        break
    case 'yellow': alert(`Ready to Go, but Stop`);
        break
    case 'green': alert(`Go Home`);
        break
    default: alert(`Немає такого кольору, Лошара!`);
}


// const numb_1 = 0.1;
// const numb_2 = 0.2;

// let sum = numb_1 + numb_2;
// // sum = sum.toPrecision(1);
// // sum = sum.toFixed(1);
// sum = Math.round(sum * 10) / 10;
// console.log(sum);
// // console.log(typeof sum);
// console.log(0.3 === sum);
// console.log(sum);


// console.log(Math.floor(3.149));
// console.log(Math.ceil(3.149));

  console.log('\n Enter sdfsdfsdf');