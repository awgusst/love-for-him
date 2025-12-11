const output = document.getElementById('output');
const typed = document.getElementById('typed');

const messages = [
  "npm install love@latest",
  "Устанавливаю зависимость... 100%",
  "Собираю самого лучшего парня... done",
  "",
  "node love.js",
  "",
  "Привет, мой любимый кодер ❤️",
  "Ты уже 2 месяца делаешь мой мир без багов и с бесконечным счастьем",
  <img src="https://imgur.com/a/2Mm091I" class="photo" alt="Наше фото">,
  "Помнишь наше первое свидание? Ты тогда сказал, что я — твой самый красивый console.log()",
  <span class="heart">❤ ❤ ❤</span>,
  <img src="https://imgur.com/a/XYywMIO" class="photo" alt="Ещё одно фото">,
  "Ты — мой самый любимый commit в этой жизни",
  "",
  "Я тебя безумно люблю. Спасибо, что ты со мной",
  "Твоя навсегда ♡",
  "",
  "P.S. Теперь это твой репозиторий — можешь делать сюда push своих чувств =)"
];

let i = 0;
let j = 0;

function typeLine() {
  if (i < messages.length) {
    if (j === 0) {
      output.innerHTML += "<br>";
    }
    if (j < messages[i].length) {
      typed.innerHTML += messages[i][j];  // Улучшено для HTML-тегов
      j++;
      setTimeout(typeLine, 80);  // Чуть медленнее для красоты
    } else {
      output.innerHTML += typed.innerHTML + "<br>";
      typed.innerHTML = "";
      j = 0;
      i++;
      setTimeout(typeLine, 1000);  // Пауза между строками
    }
  } else {
    // В конце добавим финальный курсор
    typed.innerHTML = "Press Ctrl+U to view source and see my love in code ♡";
  }
}

// Запуск с большой задержкой, чтобы всё загрузилось
window.addEventListener('load', function() {
  console.log('Скрипт запущен!');  // Для отладки в консоли
  setTimeout(function() {
    typeLine();
  }, 3000);  // 3 секунды паузы
});
