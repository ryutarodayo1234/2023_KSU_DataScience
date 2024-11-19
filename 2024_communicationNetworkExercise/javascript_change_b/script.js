// JavaScript

// console.log('Hello world!');

const btnA = document.querySelector('#btn-a');
const btnB = document.querySelector('#btn-b');
const btnC = document.querySelector('#btn-c');

btnA.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme','color-a');
});

btnB.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme','color-b');
});

btnC.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme','color-c');
});
