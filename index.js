// selezioniamo gli elementi html della calcolatrice
const numeriCalcolatrice = document.querySelectorAll(".numero");
const operatoriCalcolatrice = document.querySelectorAll(".operatori");
const displayCalcolatrice = document.querySelector(".display");
const uguale = document.querySelector(".uguale");
const clearAll = document.querySelector(".clear");
const clear = document.querySelector(".clear-uno");
const punto = document.querySelector(".punto");

// funzioni per il funzionamento della calcolatrice
// numeri
numeriCalcolatrice.forEach((element) => {
  element.addEventListener("click", function () {
    displayCalcolatrice.value += element.textContent;
  });
});

// operatori
operatoriCalcolatrice.forEach((element) => {
  element.addEventListener("click", function () {
    displayCalcolatrice.value += element.textContent;
  });
});

// clear un valore alla volta
clear.addEventListener("click", function () {
  displayCalcolatrice.value = displayCalcolatrice.value.toString().slice(0, -1);
});

// clear all
clearAll.addEventListener("click", function () {
  displayCalcolatrice.value = " ";
});

// mettere il punto
punto.addEventListener("click", function () {
  displayCalcolatrice.value += ".";
});

// restituire il risultato
uguale.addEventListener("click", function () {
  displayCalcolatrice.value = eval(displayCalcolatrice.value);
});
