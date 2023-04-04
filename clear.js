function clear() {
  const resultInput = document.getElementById("result");

  input.value = ""; //limpa o input
  resultInput.value = ""; //limpa o input

  input.focus(); // após limpar foca no input
}

export { clear };
