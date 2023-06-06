import domalt from "../domalt.js";

let clickCounter = 0;
const entryPoint = document.querySelector("#entry");

entryPoint.append(
  domalt.newElem({
    tag: "h1",
    content: "Listening to events"
  }),
  domalt.newElem({
    tag: "p",
    content: "Simply pass an event/method pair to set up your event listeners."
  })
)

const counterElem = {
  tag: "p",
  content: "Waiting for you to press the button...",
  saveAs: "counter",
  class: "colorable pink"
};

const handleClick = (e) => {
  clickCounter++;
  domalt.retrieve("counter").textContent = `Pressed ${clickCounter} times`;
  domalt.retrieve("counter").classList.remove("pink");
};

entryPoint.appendChild(domalt.newElem({
  tag: "button",
  content: "Press me to count!",
  listeners: [
    ["click", handleClick]
  ],
}));

entryPoint.appendChild(domalt.newElem(counterElem));