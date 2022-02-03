let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

console.log(blue)

const createColorElement = (color) => {
  if (color == 0) {
    return blue;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return green;
  } else if (color == 3) {
    return yellow;
  }
};

const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

const lightColor = (element, number) => {
  number = number * 500;

  setTimeout(() => element.classList.add("hoverClick"), number - 250);
  setTimeout(() => element.classList.remove("hoverClick"), 1500);
};

const checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]){
        gameOver();
        break;
    }
  }
  if (clickedOrder.length === order.length) {
    alert(`Pontuação: ${score} você acertou! Iniciando o próximo nível`);
    nextLevel();
  }
};

const click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add("hoverClick");
  setTimeout(() => {
    createColorElement(color).classList.remove("hoverClick");
    checkOrder();
  });
};

const nextLevel = () => {
  score++;
  shuffleOrder();
};

const gameOver = () => {
  alert(
    `Pontuação: ${score}! Você perdeu o jogo, clique em OK para iniciar um novo jogo`
  );
  order = [];
  clickedOrder = [];

  playGame();
};

const playGame = () => {
  alert("Bem vindo ao Gênesis! Iniciando novo jogo!");
  score = 0;

  nextLevel();
};

blue.onclick = () => click(0);
red.onclick = () => click(1);
green.onclick = () => click(2);
yellow.onclick = () => click(3);

playGame();