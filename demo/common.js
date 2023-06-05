import domalt from "../domalt.js";
import "../modules/resize.js";

const body = document.querySelector("body");
const commonScript = document.getElementById("common-script");

body.append(
  domalt.newElem({ tag: "header", saveAs: "header" }),
  domalt.newElem({ tag: "main", id: "entry" }),
  domalt.newElem({ tag: "footer" })
  );
  
switch (commonScript.getAttribute("data-page")) {
  case "demo":
    document.querySelector
}
body.style.setProperty("height", `var(--doc-height)`);
  