import domalt from "../domalt.js";

const entryPoint = document.querySelector("body");

entryPoint.appendChild(
  domalt.newElem({
    tag: "h1",
    content: "Hello world!",
    class: "hero"
  })
);

entryPoint.appendChild(
  domalt.newElem({
    tag: "p",
    content: "Here's a list of things I like:"
  })
);

entryPoint.appendChild(
  domalt.newElem({
    tag: "ul",
    children: [{
      tag: "li",
      content: "Food"
    }, {
      tag: "li",
      content: "Sleeping"
    }]
  })
);
