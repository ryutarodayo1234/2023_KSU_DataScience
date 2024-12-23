const open = document.querySelector('#btn-open');
const close = document.querySelector('#btn-close');
const menu = document.querySelector('#menu');

const menuOpen = () => {
    const keyframes = {
      visibility: ['hidden','visible'],
      opacity: [0,1]
    }
    const options = {
      duration: 600,
      easing: 'ease',
      fill: 'forwards',
    }
    menu.animate(keyframes,options);
  }

  open.addEventListener('click',menuOpen);

  const menuClose = () => {
    const keyframes = {
      visibility: ['visible','hidden'],
      opacity: [1,0]
    }
    const options = {
      duration: 600,
      easing: 'ease',
      fill: 'forwards',
    }
    menu.animate(keyframes,options);
  }
  close.addEventListener('click',menuClose);