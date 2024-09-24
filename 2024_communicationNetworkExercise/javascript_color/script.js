const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');
const message = document.getElementById('message');

        // 背景色を変更し、メッセージを表示する関数
        function changeColor() {
            // カラーコードを表示
            text.textContent = color.value;
            document.body.style.backgroundColor = color.value;

            // 背景色が#ffab66の場合にメッセージを表示
            if (color.value === '#ffab66') {
                document.getElementById('mainH1').textContent = "おめでとう！！！！！";
                text.classList.add('happy');
                document.getElementById('mainDiv').classList.add('happy2');
            } else {
                text.textContent = color.value;
                document.getElementById('mainH1').textContent = "#ffab66にしてみよう";
                text.classList.remove('happy');
                document.getElementById('mainDiv').classList.remove('happy2');
            }
        }

        // カラーピッカーで色が選択されたら、changeColorを動作させる
        color.addEventListener('input', changeColor);