const MARKDOWN_CHARS = ["[", "*", "_"];

function hasMarkdown(obj) {
  for (let i = 0; i < obj.text.length; i++) {
    if (MARKDOWN_CHARS.includes(obj.text[i])) return true;
    if (obj.text[i] === "\\") i++;
  } 
  return false;
}

function parseMarkdown(text) {
  let elems = [];
  while (text) {
    const match = step(text);
    elems.push(match.text);
    text = match.continue;
  }
  // while (elems.some(val => hasMarkdown(val)))
  return elems
}

function step(text) {
  if (!MARKDOWN_CHARS.includes(text[0])) {
    let i = 0;
    while (i < text.length) {
      i++;
      if (MARKDOWN_CHARS.includes(text[i])) {
        return {node: text.slice(0, i), continue: text.slice(i)}
      }
      if (text[i] === "\\") {
        i++;
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

export {
  parseMarkdown,
  hasMarkdown,
  step
}

