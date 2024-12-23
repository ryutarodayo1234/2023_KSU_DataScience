function nav_toggle(){
  document.getElementById("nav_toggle").classList.toggle("nav_toggle");
  document.getElementById("navigation").classList.toggle("navigation");
  document.getElementById("nav").classList.toggle("nav");
  document.getElementById("header").classList.toggle("header");
};

//ページ内リンクを踏んだ時、headerが重ならないようにする
document.addEventListener("DOMContentLoaded", function() {
  const headerHeight = 100; // ヘッダーの高さ（ピクセル）
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              const offsetPosition = targetElement.offsetTop - headerHeight;

              window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
              });
          }
      });
  });
});

function expandCard(card) {
  // 'fullscreen' クラスを追加してカードを拡大
  card.classList.add('fullscreen');
  
  // 拡大後にクローズボタンを表示
  const closeButton = card.querySelector('.close-btn');
  closeButton.style.display = 'block';
  
  // クローズボタンのクリックイベントを設定
  closeButton.addEventListener('click', function(event) {
    collapseCard(event, card);
  });
}

function collapseCard(event, card) {
  // イベントのバブリングを防止
  event.stopPropagation();
  
  // 'fullscreen' クラスを削除してカードを元に戻す
  card.classList.remove('fullscreen');
  
  // クローズボタンを非表示にする
  const closeButton = card.querySelector('.close-btn');
  closeButton.style.display = 'none';
}
