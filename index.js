import { calculate } from "./calculate.js";
import { clear } from "./clear.js";
import { theme } from "./theme.js";

const main = document.querySelector("main");
const root = document.querySelector(":root"); //cores
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

const allowedKeys = [
  "(",
  ")",
  "/",
  "C",
  "*",
  "-",
  "+",
  ".",
  "%",
  "=",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  " ",
];
//para o teclado virtual funcionar
document.querySelectorAll(".charkey").forEach(function (charkeyBtn) {
  charkeyBtn.addEventListener("click", function () {
    const value = charkeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", clear);

//para o teclado funcionar
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    //ev.key pega valor digitado que está dentro do allowed keys
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    // input.focus();
    input.value = input.value.slice(0, -1); //cortar ele(apagar)
  }
  if (ev.key === "Enter") {
    calculate(); //não foi criada ainda
  }
});

//para o calculo se feito

document.getElementById("equal").addEventListener("click", calculate);
document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget; //nosso próprio botão
    if (button.innerText === "copy") {
      //texto do botão
      button.innerText = "copiado"; //texto novo botao, caso seja copiado
      button.classList.add("sucess");
      window.navigator.clipboard.writeText(resultInput.value); //propriedade clipboard = area de transf.
    } else {
      button.innerText = "copy";
      button.classList.remove("sucess");
    }
  });

document.getElementById("themeSwitcher").addEventListener("click", theme);
