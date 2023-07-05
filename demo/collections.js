import domalt from "../domalt.js";

const entryPoint = document.getElementById("entry");
const handleButtonClick = () => {
  // console.log(domalt.retrieveCollection("list-elems"))
  // console.log(domalt.retrieve("color-picker").value)
  // console.log(domalt.retrieve("selector").value)
  domalt.retrieveCollection("list-elems").forEach(elem => elem.style.color = domalt.retrieve("color-picker").value)
}

entryPoint.append(domalt.newElem({
  tag: "ul",
  saveAs: "mainList"
}))

for (let i = 0; i < 15; i++) {
  domalt.retrieve("mainList").append(domalt.newElem({
    tag: "li",
    content: `List element #${i}`,
    collection: "list-elems"
  }))
}

entryPoint.append(domalt.newElem({
  tag: "input",
  attributes: [
    ["type", "color"],
    ["value", "#ec72ee"]
  ],
  saveAs: "color-picker"
}))

entryPoint.append(domalt.newElem({
  tag: "select",
  children: [
    domalt.newElem({tag: "option", attributes: [["value", "even"]], content: "even values"}),
    domalt.newElem({tag: "option", attributes: [["value", "odd"]], content: "odd values"}),
    domalt.newElem({tag: "option", attributes: [["value", "prime"]], content: "prime values"}),
    domalt.newElem({tag: "option", attributes: [["value", "fibo"]], content: "fibonacci values"}),
  ],
  saveAs: "selector"
}))

entryPoint.append(domalt.newElem({
  tag: "button",
  content: "Execute",
  listeners: [
    ["click", handleButtonClick]
  ]
}))