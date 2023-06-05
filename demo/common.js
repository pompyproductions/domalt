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
    const pageTitle = document.querySelector("title").textContent;
    
    domalt.retrieve("header").append(
      domalt.newElem({
        tag: "a",
        content: "Back to index",
        class: "prev",
        attributes: [
          ["href", "./index.html"]
        ]
      }),
      domalt.newElem({ 
        tag: "h2", 
        content: `Demo: _${pageTitle.slice(12)}_`, 
        allowMarkdown: true})
    );
    break;
  case "home":
    // do stuff
    break;
}

body.style.setProperty("height", `var(--doc-height)`);