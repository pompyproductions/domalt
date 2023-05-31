const MARKDOWN_CHARS = ["[", "*", "_"];

function hasMarkdown(obj) {
  for (let i = 0; i < obj.text.length; i++) {
    if (MARKDOWN_CHARS.includes(obj.text[i])) return true;
    if (obj.text[i] === "\\") i++;
  } 
  return false;
}

function traverse(text) {
  const arr = [];
  let startIndex = 0;
  let tag = "none";
  if (MARKDOWN_CHARS.includes(text[0])) {
    tag = text[0] === "[" ? "]" : text[0];
  };
  
  if (!MARKDOWN_CHARS.includes(text[0])) {
    for (let i = 1; i < text.length; i++) {
      if (MARKDOWN_CHARS.includes(text[i])) {
        for (let j = i + 1; j < text.length; j++) {
          const tag = text[0] === "[" ? "]" : text[0];
          if (text[j] === tag) {
            arr.push({tag: "none", content: text.slice(startIndex, i)});
            arr.push(traverse(text.slice(i, j)));
            startIndex = j + 1;
            i = j;
            break;
          }
        }
      }
    }
    arr.push()
  }
}







// function parseMarkdown(text) {
//   let elems = [];
//   while (text) {
//     const match = step(text);
//     elems.push(match.text);
//     text = match.continue;
//   }
//   // while (elems.some(val => hasMarkdown(val)))
//   return elems
// }

function traverseMarkdown(text) {
  const arr = [];


  if (!MARKDOWN_CHARS.includes(text[0])) {
    for (let i = 1; i < text.length; i++) {
      if (MARKDOWN_CHARS.includes(text[i])) {
        arr.push({
          tag: "none",
          content: text.slice(0, i)
        });
        // const tag = text[i] === "[" ? "]" : text[i];
        // for (let j = i + 1; j < text.length; j++) {

        // }


      }
    }
    while (i < text.length) {
      i++;
      if (MARKDOWN_CHARS.includes(text[i])) {
        // find closing tag



        // return {node: text.slice(0, i), continue: text.slice(i)}
      }
      if (text[i] === "\\") {
        i++;
        // cut the escape character with slice + slice
      }
    }
  } else {
    const tag = text[0] === "[" ? "]" : text[0];
    let i = 0;
    while (i < text.length) {
      i++;
      if (text[i] === tag) {
        return {text: text.slice(0, i + 1), continue: text.slice(i + 1)}
      }
      if (text[i] === "\\") {
        i++;
      }
    }
    // return tag
  }
  return {text, continue: ""}
}

// export {
//   parseMarkdown,
//   hasMarkdown,
//   step
}

