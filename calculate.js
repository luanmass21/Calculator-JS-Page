function calculate() {
  const input = document.getElementById("input");
  const resultInput = document.getElementById("result");

  resultInput.value = "ERROR";
  resultInput.classList.add("error");

  const result = eval(input.value); //seria algo que serve para avaliar o código

  resultInput.value = result;

  input.value = "";
  resultInput.classList.remove("error");
}

export { calculate };
