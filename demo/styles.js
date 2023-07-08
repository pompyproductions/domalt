
import domalt from "../domalt.js";

const entryPoint = document.getElementById("entry");

entryPoint.append(domalt.newElem({
  tag: "h2",
  style: { color: "#ff0000" },
  content: "I am red!"
}))