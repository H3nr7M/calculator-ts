const visor = document.getElementById("visorbg") as HTMLInputElement;
const doble = document.getElementById("doble") as HTMLElement;

let isDark = false;

function adicionar(tecla: string): void {
  visor.value = visor.value + tecla;
}

function limpezatotal(): void {
  visor.value = "";
}

function calcular(): void {
  visor.value = eval(visor.value);
}

const theme = document.querySelector(".theme-toggler") as HTMLElement;
const calculator = document.querySelector(".calculator") as HTMLElement;
const icon = document.querySelector("tiggler-icon") as HTMLElement;

theme.onclick = () => {
  calculator.classList.toggle("dark");
  theme.classList.toggle("active");
};
