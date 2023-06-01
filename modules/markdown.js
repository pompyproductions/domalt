const MARKDOWN_CHARS = ["[", "*", "_"];

function hasMarkdown(obj) {
  for (let i = 0; i < obj.text.length; i++) {
    if (MARKDOWN_CHARS.includes(obj.text[i])) return true;
    if (obj.text[i] === "\\") i++;
  }
  return false;
}

function checkTags(text) {
  const current = {
    tag: "text",
    closingTag: "",
  };
  if (text[0] === text[text.length - 1] && MARKDOWN_CHARS.includes(text[0])) {
    current.closingTag = text[0] === "[" ? "]" : text[0];
    switch (current.closingTag) {
      case "]":
        current.tag = "a";
        break;
      case "_":
        current.tag = "em";
        break;
      case "*":
        current.tag = "strong";
        break;
    }
  }
  return current;
}

function traverse(text) {
  const arr = [];
  let currentNode = checkTags(text);
  if (currentNode.tag !== "text") {
    text = text.slice(1, -1)
  }
  let startIndex = 0;

  for (let i = 0; i < text.length; i++) {
    if (MARKDOWN_CHARS.includes(text[i])) {
      let closingTag = text[i] === "[" ? "]" : text[i];
      for (let j = i + 1; j < text.length; j++) {
        if (text[j] === closingTag) {
          arr.push({ content: text.slice(startIndex, i), ...currentNode });
          arr.push(...traverse(text.slice(i, j + 1)));
          startIndex = j + 1;
          i = j;
          break;
        }
      }
    }
  }
  if (startIndex < text.length - 1) {
    arr.push({ content: text.slice(startIndex, text.length), ...currentNode });
  }
  return arr;
}

// // function parseMarkdown(text) {
// //   let elems = [];
// //   while (text) {
// //     const match = step(text);
// //     elems.push(match.text);
// //     text = match.continue;
// //   }
// //   // while (elems.some(val => hasMarkdown(val)))
// //   return elems
// // }

// function traverseMarkdown(text) {
//   const arr = [];

//   if (!MARKDOWN_CHARS.includes(text[0])) {
//     for (let i = 1; i < text.length; i++) {
//       if (MARKDOWN_CHARS.includes(text[i])) {
//         arr.push({
//           tag: "none",
//           content: text.slice(0, i)
//         });
//         // const tag = text[i] === "[" ? "]" : text[i];
//         // for (let j = i + 1; j < text.length; j++) {

//         // }

//       }
//     }
//     while (i < text.length) {
//       i++;
//       if (MARKDOWN_CHARS.includes(text[i])) {
//         // find closing tag

//         // return {node: text.slice(0, i), continue: text.slice(i)}
//       }
//       if (text[i] === "\\") {
//         i++;
//         // cut the escape character with slice + slice
//       }
//     }
//   } else {
//     const tag = text[0] === "[" ? "]" : text[0];
//     let i = 0;
//     while (i < text.length) {
//       i++;
//       if (text[i] === tag) {
//         return {text: text.slice(0, i + 1), continue: text.slice(i + 1)}
//       }
//       if (text[i] === "\\") {
//         i++;
//       }
//     }
//     // return tag
//   }
//   return {text, continue: ""}
// }

export {
  traverse,
  hasMarkdown,
  // step
};
