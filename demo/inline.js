import domalt from "../domalt.js";

const entry = document.getElementById("entry");

entry.append(
  domalt.newElem(
    {tag: "h1", content: "Markup for your inlines!"}
  ), domalt.newElem(
    {
      tag: "p", 
      content: "You can use simple, _markdown-like_ syntax to add 'em' and 'strong' to your newly created elements.",
      allowInline: true
    }
  )
)

const texts = [
  "Hello world! I have no markdown.",
  "_I am only markdown..._",
  "Hello _beibe!_ I start with text and then add *simple markdown.*",
  "_This one_ starts with markdown.",
  "This one has \\_escaped markdown\\_ elements",
  "This one mixes \\_escaped markdown\\_ and *markdown*",
  "\\_Escape character *right at the start!*",
  "_Here we have *nested* markup._",
  "_Nested \\*escape character\\*_",
  "An \\\\_escaped escape!_",
  "Some _nested *markdown*_ followed by _more *nested* markdown and \\_escapes_ and stuff",
  "This is _*\\\\all mixed up_*",
  "_*\\\\all mixed up_ right at the start*",
  // "[This is a link](markdown.html)",
  // "_Here's a *nested* [link.com]_"
];

const myNode = {
  class: "indent",
  id: "content",
  children: [],
};

texts.forEach((txt) => {
  myNode.children.push({ tag: "p", content: txt, allowInline: true });
});

document.querySelector("#entry").appendChild(domalt.newElem(myNode));