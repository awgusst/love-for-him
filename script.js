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
  <img src="https://imgur.com/a/2Mm091I" class="photo">,
  "Помнишь наше первое свидание? Я тогда поняла что все это зайдет куда серьезнее console.log()",
  <span class="heart">❤ ❤ ❤</span>,
  <img src="https://imgur.com/a/XYywMIO" class="photo">,
  "Ты — мой самый любимый commit в этой жизни",
  "",
  "Я тебя безумно люблю. Спасибо, что ты у меня есть",
  "Твоя навсегда ♡",
  "",
  "P.S. Теперь это твой репозиторий — можешь делать сюда push своих чувств =)"
];

let i = 0;
let j = 0;

function typeLine() {
  if (i < messages.length) {
    if (j === 0) output.innerHTML += "<br>";
    if (j < messages[i].length) {
      typed.innerHTML += messages[i].charAt(j);
      j++;
      setTimeout(typeLine, 50);
    } else {
      output.innerHTML += typed.innerHTML + "<br>";
      typed.innerHTML = "";
      j = 0;
      i++;
      setTimeout(typeLine, 800);
    }
  }
}

window.onload = () => setTimeout(typeLine, 1000);
