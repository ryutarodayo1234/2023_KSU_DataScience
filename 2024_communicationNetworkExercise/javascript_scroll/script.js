// JavaScript
const show = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ['200px 0',0]
  }
  entries[0].target.animate(keyframes,600);
}

const observer = new IntersectionObserver(show);

observer.observe(document.querySelector('#img01'));
observer.observe(document.querySelector('#img02'));
observer.observe(document.querySelector('#img03'));
