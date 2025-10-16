import _ from 'lodash';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'Beetroot'], ' ');

  return element;
}

const block = document.querySelector('.block');

$('.btn').click(() => {alert(`Ви знаєте Webpack!!!`)})
document.body.appendChild(component());