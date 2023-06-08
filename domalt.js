import { traverse } from "./modules/markdown.js";

let uidCounter = 0;
const elems = new Map();

function retrieve(elemName) {
  return elems.get(elemName);
}

function newElem(obj) {
  if (!Object.hasOwn(obj, "tag")) {
    obj.tag = "div";
  } else if (obj.tag === "text") {
    return obj.content;
  }
  const elem = document.createElement(obj.tag);

  if (Object.hasOwn(obj, "content")) {
    if (obj.allowInline) {
      const nodes = traverse(obj.content);
      console.log(...nodes);
      nodes.forEach((n) => elem.append(newElem(n)));
    } else {
      elem.textContent = obj.content;
    }
  }

  for (let prop in obj) {
    const val = obj[prop];
    switch (prop) {
      case "id":
        elem.id = val;
        break;
      case "class":
        elem.classList.add(...val.split(" "));
        break;
      case "attributes":
        for (let attr of val) {
          if (attr[0] === "data-uid") continue;
          elem.setAttribute(attr[0], attr[1]);
        }
        break;
      case "children":
        if (!val.length) break;
        for (let node of val) {
          if (val instanceof HTMLElement) {
            elem.appendChild(node);
          } else {
            elem.appendChild(newElem(node));
          }
        }
        break;
      case "uid":
        if (val === true) {
          while (elems.has(uidCounter)) {
            uidCounter++;
          }
          elem.setAttribute("data-domalt-id", uidCounter++);
        } else if (typeof val === "number" || typeof val === "string") {
        }
        break;
      case "listeners":
        for (let listener of val) {
          elem.addEventListener(listener[0], listener[1]);
        }
        break;
      case "saveAs":
        elems.set(val, elem);
        break;
    }
  }
  return elem;
}

function newElemList(content, isOrdered = false) {
  let listElems = [];
  for (let txt of content) {
    listElems.push({ tag: "li", content: txt });
  }
  // if (Array.isArray(obj.children)) {
  //   obj.children.push(...)
  // }
  return newElem({
    tag: isOrdered ? "ol" : "ul",
    children: listElems
  });
}

function newElemNav(links, isOrdered = false) {
  // links are: [textContent, href]
  const navElems = [];
  for (let link of links) {
    navElems.push({
      tag: "li",
      children: [
        {
          tag: "a",
          content: link[0],
          attributes: [["href", link[1]]],
        },
      ],
    });
  }
  // for (let childNode of obj) {
  //   if (childNode instanceof HTMLElement) {
  //     children.push(childNode)
  //   } else {
  //     children.push(newElem(childNode))
  //   }
  // }
  return newElem({
    tag: "nav",
    children: [
      {
        tag: isOrdered ? "ol" : "ul",
        children: navElems,
      },
    ],
  });
}

export default { newElem, newElemNav, newElemList, retrieve };
