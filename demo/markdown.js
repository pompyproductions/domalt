// const text = "Hello world!"
import domalt, { hasMarkdown, parseMarkdown } from "../domalt.js";
// import { splitMarkdown } from "../modules/markdown.js";

// !!!! double backslashes

const texts = [
  "Hello world! I have no markdown.",
  "Hello _beibe!_ I start with text and then add *simple markdown.*",
  "_This one_ starts with markdown",
  "This one has \\_escaped markdown\\_ elements",
  "This one mixes \\_escaped markdown\\_ and *markdown*",
  "_Here we have *nested* markup_",
  "[This is a link](markdown.html)",
  "_Here's a *nested* [link.com]_"
];

const myNode = {
  tag: "main",
  id: "content",
  children: [],
};

texts.forEach((txt) => {
  myNode.children.push({ tag: "p", content: txt, allowMarkdown: true });
  console.log(parseMarkdown(txt));
});

document.querySelector("body").appendChild(domalt.newElem(myNode));

// const node = document.querySelector("p");
// node.append("hey ");
// node.append(domalt.newElem({
//   tag: "b",
//   content: "beibe"
// }));
// node.append(" whatsup");
