var visor = document.getElementById("visor1");
var doble=document.getElementById("doble")

let isDark =true;


 function adicionar(tecla) {
   visor.value = visor.value + tecla;
 }


 function limpezatotal() {
   visor.value = "";
 }


 function calcular() {
   visor.value = eval(visor.value);
 }

const theme=document.querySelector(".theme-toggler")
const calculator=document.querySelector(".calculator")
const icon=document.querySelector("tiggler-icon")
theme.onclick=()=>{
  calculator.classList.toggle("dark")
  theme.classList.toggle("active")
}