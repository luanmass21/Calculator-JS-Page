function keydown(ev) {
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
}
