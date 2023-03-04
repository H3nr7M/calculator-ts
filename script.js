var visor = document.getElementById("visorbg");
var doble = document.getElementById("doble");
var isDark = false;
function adicionar(tecla) {
    visor.value = visor.value + tecla;
}
function limpezatotal() {
    visor.value = "";
}
function calcular() {
    visor.value = eval(visor.value);
}
var theme = document.querySelector(".theme-toggler");
var calculator = document.querySelector(".calculator");
var icon = document.querySelector("tiggler-icon");
theme.onclick = function () {
    calculator.classList.toggle("dark");
    theme.classList.toggle("active");
};
