function theme() {
  const main = document.querySelector("main");
  const root = document.querySelector(":root"); // cores
  if (main.dataset.theme === "dark") {
    //acessando o main/id/atributo ("data-theme") e dps o dark
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
}

export { theme };
