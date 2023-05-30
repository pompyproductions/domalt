import domalt from "../domalt.js";

const entryPoint = document.querySelector("body");

entryPoint.appendChild(
  domalt.newElem({
    tag: "h1",
    text: "Hello world!",
  })
);

entryPoint.appendChild(
  domalt.newElem({
    tag: "p",
    text: "Here's a list of things I like:"
  })
);

entryPoint.appendChild(
  domalt.newElem({
    tag: "ul",
    children: [{
      tag: "li",
      text: "Food"
    }, {
      tag: "li",
      text: "Sleeping"
    }]
  })
);
