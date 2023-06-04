import domalt from "../domalt.js";

let clickCounter = 0;
const entryPoint = document.querySelector("body");

const counterElem = {
  tag: "p",
  content: "haven't pressed yet",
  id: "counter"
};

const handleClick = (e) => {
  clickCounter++;
  document.querySelector("#counter").textContent = `pressed ${clickCounter} times`
};

entryPoint.appendChild(domalt.newElem({
  tag: "button",
  content: "press me!",
  listeners: [
    ["click", handleClick]
  ]
}));

entryPoint.appendChild(domalt.newElem(counterElem));