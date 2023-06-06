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
  }),
  domalt.newElem({
    tag: "p",
    content: "Note that it is still a bit clunky to add event listeners as an afterthought, using queries to find the element and calling methods on it. On the next page, you'll find a more concise way to do that."
  })
);

entryPoint.append(
  domalt.newElem({
    tag: "a",
    content: "Next up: event listeners",
    class: "next big",
    attributes: [
      ["href", "./listeners.html"]
    ]
  })
)

document.getElementById("color-button").addEventListener("click", dye);