const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');
const text = document.querySelector('#caption');
const mainDiv = document.querySelector('#main-div');

thumbs.forEach(function(item, index) {
    item.onclick = function() {
        main.src = this.dataset.image;
        text.textContent = this.title;
        mainDiv.classList.add("show");
    }
  });