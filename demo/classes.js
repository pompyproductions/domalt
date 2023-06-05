import domalt from "../domalt.js";

const entryPoint = document.getElementById("entry");
const dye = () => {
  document.getElementById("colorable").classList.toggle("pink");
}

entryPoint.append(
  domalt.newElem({
    tag: "h1",
    content: "Classes and ID's!",
    class: "hero"
  }),
  domalt.newElem({
    tag: "p",
    content: "Make hero units like a hero unit.",
    class: "up pink"
  }),
  domalt.newElem({
    tag: "p",
    content: "The above element uses two classes and it works like you'd expect.",
    class: "up"
  }),
  domalt.newElem({
    tag: "p",
    content: "And here we use ID's to do things:",
    id: "colorable"
  }),
  domalt.newElem({
    tag: "button",
    content: "Dye the text!",
    id: "color-button"
  })
);

document.getElementById("color-button").addEventListener("click", dye);