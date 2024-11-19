// JavaScript

// フェード
const fade = document.querySelector('.fade');

const fadeKeyframes = {
  opacity: [0, 1],
}

const fadeOptions = {
  duration: 3000,
  easing: 'ease',
  fill: 'forwards',
}

fade.animate(fadeKeyframes, fadeOptions);

// 回転
const spin = document.querySelector('.spin');

const spinKeyframes = {
  rotate: ['x 360deg','x 0deg'],
  opacity: [0, 1],
}

const spinOptions = {
  duration: 2000,
  easing: 'ease',
}

spin.animate(spinKeyframes, spinOptions);

// 色が変わる
const color = document.querySelector('.color');

const colorKeyframes = {
  backgroundColor: ['orange ','yellow ','lightgreen','skyblue'],
}

const colorOptions = {
  duration: 5000,
  direction: 'alternate',
  iterations: Infinity,
}

color.animate(colorKeyframes,colorOptions);


// 背景が延びる
const line = document.querySelector('.line');

const lineKeyframes = {
  width: ['0','100%'],
  color: ['transparent','#FFF'],
}

const lineOptions = {
  duration: 500,
  fill: 'forwards',
  easing:'ease-in',
}

line.animate(lineKeyframes,lineOptions);


// 文字のスライドイン
const slide = document.querySelector('.slide-in');

const slideKeyframes = {
  opacity: [0, 1],
  translate: ['0 50px', 0],
};

const slideOptions = {
  duration: 1000,
  fill: 'forwards',
};

slide.animate(slideKeyframes,slideOptions);
