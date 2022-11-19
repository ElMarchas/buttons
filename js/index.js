const counterHandler = (output, div) => {
    div.dataset.counter = +div.dataset.counter + 1;
  output.innerHTML = "Boton clickeado " + div.dataset.counter + " veces.";
};

const start = () => {
  const divCounter = document.getElementById("divCounter");
  const outputCounter = document.getElementById("outputCounter");

  divCounter.addEventListener("click", () =>
    counterHandler(outputCounter, divCounter)
  );
};

start();
