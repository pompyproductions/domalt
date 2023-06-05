import domalt from "../domalt.js";

const entryPoint = document.getElementById("entry");
const text = [
  "Here's a very simple starter to 'domalt.js': a single function named 'domalt.newElem()' that takes an object and returns an HTML element.",
  "This one function is why 'domalt.js' was born — just to avoid the hassle of writing 'document.createElement(tag)' and adjusting it line by line.",
  "This simpler syntax makes it easier to just batch things (such as the use of 'Array.forEach()' in this example) and to keep the code clean."
]

entryPoint.append(
  domalt.newElem({
    tag: "h1",
    content: "Hello world!",
  })
);

text.forEach((str) => {
  entryPoint.append(domalt.newElem({ tag: "p", content: str }))
});

entryPoint.append(
  domalt.newElem({
    tag: "a",
    content: "Let's check out some features",
    class: "next big",
    attributes: [
      ["href", "./classes.html"]
    ]
  })
)

// entryPoint.appendChild(
//   domalt.newElem({
//     tag: "p",
//     content: "Here's a list of things I like:"
//   })
// );

// entryPoint.appendChild(
//   domalt.newElem({
//     tag: "ul",
//     children: [{
//       tag: "li",
//       content: "Food"
//     }, {
//       tag: "li",
//       content: "Sleeping"
//     }]
//   })
// );

// entryPoint.appendChild(
//   domalt.newElem({
//     tag: "ol",
//     children: [{
//       tag: "li",
//       content: "Food"
//     }, {
//       tag: "li",
//       content: "Sleeping"
//     }]
//   })
// );
