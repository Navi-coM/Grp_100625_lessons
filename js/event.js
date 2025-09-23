'use strict';

// BOM 
// navigator 

// const langBrowser = navigator.language;
// const systemComp = navigator.userAgentData.platform;
// const allDataComp = navigator.userAgent;
// // const geoPositionUser = navigator.geolocation.getCurrentPosition();

// console.log(langBrowser);
// console.log(systemComp);
// console.log(allDataComp);
// // console.log(geoPositionUser);

// navigator.geolocation.getCurrentPosition(function(position) {
//     console.log('Latitude', position.coords.latitude);
//     console.log('Longitude', position.coords.longitude);
    
// })



// ---------- 1. Події миші ----------
// ---------- 2. Події клавіатури ----------
// ---------- 3. Події форми ----------
// ---------- 4. Події документа ----------
// ---------- 5. Події CSS ----------

const btnChangeColor = document.querySelector('#btn-change-color');
const btnResetColor = document.querySelector('#btn-reset-color');
const bodyEl = document.body;
// const headEl = document.head;

// console.log(bodyEl);
// console.log(headEl);

function changeBackgroundBody() {
    bodyEl.classList.add('background-blue');
}
function resetBackgroundBody() {
    bodyEl.classList.remove('background-blue');
}

function alertInfo() {
    alert(`Color is Changed`)
}

// btnChangeColor.onmouseenter = changeBackgroundBody;
// btnResetColor.onclick = resetBackgroundBody;

// btnChangeColor.onclick = alertInfo;

// -------------------------------- Event Об'єкт ----------------------

// Координати руху миші

// document.addEventListener('click', event => console.log(`coordinate X: ${event.clientX} , coordinate Y: ${event.clientY}` ));

// document.addEventListener('click', event => {
//     console.log('1.', event.target)
//     console.log('2.', event.currentTarget)
// });


// Клавіатура 

// document.addEventListener('keydown', (event) => {
//     console.log(event);
//     console.log(`Натиснута клавіша: ${event.key}`);
//     console.log(`Код клавіши: ${event.code}`);
    
// })

// ---------------------------------------------------------------

let btnsCurrency = Array.from(document.querySelectorAll('[data-currency]'));
let dataInput = document.getElementById('inpt-amount');

btnsCurrency.forEach(() => {
    document.body.onclick = (event) => {
        event.preventDefault();
        if (event.target.dataset.currency) {

            let dataCurrency = event.target.dataset.title();

            alert(`Ви вибрали валюту - ${dataCurrency}`);
        }
    }
})


btnsCurrency.forEach((btn) => {
    btn.addEventListener('click', () => {

        let currentCurrency = btn.getAttribute('data-currency');

        let rez = (dataInput.value / currentCurrency).toFixed(2);
        console.log(+rez);
    })
})


btnChangeColor.addEventListener('click', alert);


function alert() {
    console.log(`Data`);
}