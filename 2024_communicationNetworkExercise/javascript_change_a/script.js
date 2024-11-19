// JavaScript

// console.log('Hello world!');

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  document.body.classList.toggle('black');
});

//functionを使った書き方
// function change() {
//   document.body.classList.toggle('black');
// }
// btn.addEventListener('click', change);
