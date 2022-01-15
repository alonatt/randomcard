/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(pintarandom());
  document.querySelector(".card span").innerHTML = numerorandom();
};

let numerorandom = () => {
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexnumeros = Math.floor(Math.random() * numeros.length);
  return numeros[indexnumeros];
};

let pintarandom = () => {
  let pintas = ["corazon", "diamante", "espada", "trebol"];
  let indexpintas = Math.floor(Math.random() * pintas.length);
  return pintas[indexpintas];
};
