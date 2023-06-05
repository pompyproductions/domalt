import domalt from "../domalt.js";
import "../modules/resize.js";

const body = document.querySelector("body");
const commonScript = document.getElementById("common-script");

body.append(
  domalt.newElem({ tag: "header", saveAs: "header" }),
  domalt.newElem({ tag: "main", id: "entry", saveAs: "entry" }),
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
          ["href", "../index.html"]
        ]
      }),
      domalt.newElem({ 
        tag: "h2", 
        content: `Demo: _${pageTitle.slice(12)}_`, 
        allowMarkdown: true})
    );
    break;
  case "home":
    domalt.retrieve("header").append(
      domalt.newElem({
        tag: "h2",
        content: "Domalt.js demo index"
      })
    );
    domalt.retrieve("entry").append(
      domalt.newElemNav([
        ["Hello world", "./demo/hello.html"],
        ["Classes & IDs", "./demo/classes.html"],
        ["Lists & Navs", "./demo/lists.html"],
        ["Event listeners", "./demo/lists.html"],
        ["Inline elements", "./demo/lists.html"],
      ], true)
    )
    break;
}

body.style.setProperty("height", `var(--doc-height)`);