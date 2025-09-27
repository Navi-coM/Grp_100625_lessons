'use strict';

// ---------- AJAX (Async JS and XML (JSON - JavaScript Object Notation)) -----------------


// ------------------------- Варіанти Aсинхроності в JS -------------
// 1. setTimeout
// 2. Promise
// 3. Async Await
// 4. XMLHttpRequest
// 5. fetch

// -------------------------- XMLHttpRequest ----------------

let xhr = new XMLHttpRequest();
let url = 'https://jsonplaceholder.typicode.com/todos/10';
// let getNumbTodo = document.querySelector('#todo_numb');



// xhr.open('GET', url, true);
// xhr.onload = function() {
//     if(xhr.status === 200) {
//         console.log(JSON);

//         let newObj = JSON.parse(xhr.responseText);
//         console.log(newObj);
//         newObj.title = `Watching Football!`;
//         console.log(newObj);
//     } else {
//         console.error(`Error request`, xhr.status);
//     }
// };
// xhr.send();

// -------------------- Fetch ---------------

// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(`Error`, error))



// ------------------ Promise (обіцянка) -----------

// Promise - обіцянка щось виконати коли щось відбудеться
// Стан - 1) pending (очикування), 2) fulfilled (успіх), 3) rejected (неуспіх)
// Result - 1) undefined, 2) value, 3) error

// pending     fulfilled     rejected
//              resolve       reject
// undefined    value          error
//  then()        catch()

// const promise = new Promise((resolve, reject) => {
//     resolve(`OK`);
//     setTimeout(() => {
//         reject(new Error(`Error`))
//     }, 1000);
// })


// promise.then(() => value);
// promise.finally(console.log(`Виконаєтьс прилюбому сценарію`));

// console.log(promise);


// // --------------------JSON перетворення -------------

// let student_1 = {
//     name: 'Igor',
//     age: 26
// }

// // console.log(student_1);

// let jsonStudent_1 = JSON.stringify(student_1);
// console.log(jsonStudent_1);
// // console.log(typeof jsonStudent_1);

// let parseStudent_1 = JSON.parse(jsonStudent_1);
// console.log(parseStudent_1);


// --------------------- Fetch Practice ------------

// let btnAddpost = document.querySelector('#btn-add-post');
// let blockPosts = document.querySelector('#posts');
// let amountPost = document.querySelector('#amount_post');

// const urlPosts = new URL('https://jsonplaceholder.typicode.com/posts');

// let getAmountPosts = function() {
//     let amountPostValue = amountPost.value;
//     let urlPostsLimit = new URL(`?&_limit=${amountPostValue}`, urlPosts);
//     return urlPostsLimit;
// }

// function addPost() {
//     fetch(getAmountPosts())
//         .then(response => {
//             if(response.ok) {
//                 return response.json();
//             }
//         })
//         .then(data => {
//             data.forEach(post => {
//                 const [first, ...rest] = post.title;
//                 post.title = first.toUpperCase() + rest.join('');
//                 blockPosts.insertAdjacentHTML('beforeend', `<p><span>${post.id}</span>.<b>${post.title}</b><br/>${post.body}</p>`)
//             })
//         })
//         .catch(error => console.error(`Error`, error))
//         .finally(console.log(`У нас все вийшло!!!`))
// }

// btnAddpost.addEventListener('click', addPost);




// function addPost() {
//     fetch(getAmountPosts())
//         .then(response => {
//             if(response.ok) {
//                 return response.json();
//             }
//         })
//         .then(data => {
//             data.forEach(post => {
//                 [first, ...rest] = post.title
//                 post.title = first.toUpperCase() + rest.join('');
//             })
//         })
//         .then(data => {
//             data.forEach( post => {
//                 blockPosts.insertAdjacentHTML('beforeend', `<p><span>${post.id}</span>.<b>${post.title}</b><br/>${post.body}</p>`)
//             })
//         })
//         .catch(error => console.error(`Error`, error))
//         .finally(console.log(`У нас все вийшло!!!`))
// }
// btnAddpost.addEventListener('click', addPost);



// ---------------------------- async await ---------------------

// 1) Async
// async function getHello() {
//     return `Hello World!`;
// }

// console.log(getHello());

// getHello().then(console.log);

// 2) Await

// async function getData() {
//     let promise = new Promise((resolve) => {
//         setTimeout(() => resolve(`Recieve Data`), 3000);
//     })
//     console.log(`Start !!!`);
//     let rez = await promise;
//     console.log(rez);
    
// }

// getData();

// 3) ---------------  try, catch ----------------

async function getDataTodos() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data  = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error(`Error Download`, error.message);
    } finally {
        console.log(`Я виконаюсь завжди!!!`);
    }

}

getDataTodos()