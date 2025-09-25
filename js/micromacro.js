'use strict';

console.log('1');

setTimeout(() => {
    console.log('2');
    
}, 0);


Promise.resolve()
    .then(() => console.log('3'))
    .then(() => console.log('4'));


setTimeout((function() {console.log('5')})(), 1000)

// ----------------------------- СЗ -------------------------

// Дати вичерпну відповідь, чому console.log 5 виводиться другим.