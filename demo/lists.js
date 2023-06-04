import domalt from "../domalt.js";

const entryPoint = document.querySelector("body");

entryPoint.appendChild(domalt.newElem({
    tag: "p",
    content: "hello"
  })
)