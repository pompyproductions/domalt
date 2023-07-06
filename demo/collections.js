
import domalt from "../domalt.js";

const entryPoint = document.getElementById("entry");
const handleButtonClick = () => {
  let listElems = domalt.retrieveCollection("list-elems");
  listElems.forEach(elem => elem.style.color = "");
  let i = 0;
  switch (domalt.retrieve("selector").value) {
    case "even":
      listElems = listElems.filter((e) => {
        return !!(i++ % 2)
      })
      break;
    case "odd":
      listElems = listElems.filter((e) => {
        return !(i++ % 2)
      })
      break;
    case "clear":
      listElems = []
  }
  listElems.forEach(elem => elem.style.color = domalt.retrieve("color-picker").value)
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
    domalt.newElem({tag: "option", attributes: [["value", "none"]], content: "no filter"}),
    domalt.newElem({tag: "option", attributes: [["value", "even"]], content: "even values"}),
    domalt.newElem({tag: "option", attributes: [["value", "odd"]], content: "odd values"}),
    domalt.newElem({tag: "option", attributes: [["value", "clear"]], content: "clear"})
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