import domalt from "../domalt.js";

const entryPoint = document.getElementById("entry");

entryPoint.appendChild(
  domalt.newElem({
    tag: "h1",
    content: "Put things into lists!",
  })
);

let text = [
  "By default, making a list of things takes just too much writing. Make an <ol> or <ul>, make a <li>, add things to <li>, add <li> to <ol>, and so on.",
  "Even with 'domalt.newElem() it takes some nested children action, so enter 'domalt.newElemList()'!",
  "Let's make a step-by-step tutorial by using 'newElemList'.",
];

for (let t of text) {
  entryPoint.append(domalt.newElem({ tag: "p", content: t }));
}

entryPoint.append(
  domalt.newElemList(
    [
      "Put the content you want in an array.",
      "Call 'domalt.newElemList' with said array as its argument.",
      "Profit.",
    ],
    true
  ),
  domalt.newElem({
    tag: "p",
    content: "There are a few points to consider:"
  }),
  domalt.newElemList(
    [
      "By passing an optional second parameter, you can make the list ordered or unordered.",
      "By default, the list is unordered.",
      "Navs are similar yet even more annoyingly repetitive to make, so use 'newElemNav' for that!"
    ]
  ),
  domalt.newElem({
    tag: "p",
    content: "The following nav is made with 'domalt.newElemNav()':"
  }),
  domalt.newElemNav([
    ["Go back to the index", "../index.html"],
    ["Check out how to use 'markdown-like' syntax for inline elements", "./inline.html"]
  ], true)
);