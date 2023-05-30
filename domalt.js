let uidCounter = 0;
const elems = new Map();

function newElem(obj) {
  if (!Object.hasOwn(obj, "tag")) obj.tag = "div";

  const elem = document.createElement(obj.tag);

  for (let prop in obj) {
    const val = obj[prop];
    switch (prop) {
      case "id":
        elem.id = val;
        break;
      case "class":
        elem.classList.add(val.split(" "));
        break;
      case "text":
        elem.textContent = val;
        break;
      case "attributes":
        for (let attr of val) {
          if (attr[0] === "data-uid") continue;
          elem.setAttribute(attr[0], attr[1]);
        }
        break;
      case "children":
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
          elem.addEventListener(listener[0], listener[1])
        }
    }
  }
  return elem;
}

function newElemNav(obj, isOrdered = false) {
  const children = [];
  for (let childNode of obj) {
    if (childNode instanceof HTMLElement) {
      children.push(childNode)
    } else {
      children.push(newElem(childNode))
    }
  }
  return newElem({
    tag: "nav",
    children: [
      {
        tag: isOrdered ? "ol" : "ul",
        children: children
      },
    ],
  });
}

export default { newElem, newElemNav };
