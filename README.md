# Domalt

## A simple, tiny, _zero-dependency_ alternative to the less wieldy DOM manipulation methods of vanilla JS.

If you're determined not to use `innerHTML` in your code, DOM manipulation can get real verbose real fast.

Suppose you're making a header for your website, including a logo and the following links:

```js
const myLinks = [
  ["Hello world", "./demo/hello.html"],
  ["Classes & IDs", "./demo/classes.html"],
  ["Event listeners", "./demo/listeners.html"],
  ["Lists & Navs", "./demo/lists.html"],
  ["Inline elements", "./demo/lists.html"],
];
```

**Domalt** comes to the rescue by turning this:

```js
const myHeader = document.createElement("header");
const myLogo = document.createElement("h1");
const myNav = document.createElement("nav");
const myList = document.createElement("ul");

myLogo.textContent = "Pompy";
myLogo.classList.add("logo", "big", "clickable");
myLogo.addEventListener("click", () => window.open("https://erengazioglu.com"));
myLogo.addEventListener("mouseenter", () => console.log("hovering over"));

for (let link of links) {
  const myLi = document.createElement("li");
  const myAnchor = document.createElement("a");
  myAnchor.textContent = link[0];
  myAnchor.setAttribute("href", link[1]);
  myLi.appendChild(myAnchor);
  myList.appendChild(myLi);
}

myNav.append(myList);
myHeader.append(myNav, myLogo);
document.querySelector("body").append(myHeader);
// rinse and repeat for main and footer...
```

...into a single statement:

```js
document.querySelector("body").append(
  domalt.newElem({
    tag: "header",
    children: [
      {
        tag: "h1",
        content: "Pompy",
        class: "logo big clickable",
        listeners: [
          ["mouseenter", () => console.log("hovering over")],
          ["click", () => window.open("https://erengazioglu.com")]
        ]
      },
      domalt.newElemNav(myLinks),
    ],
  })
);
```

## Installation

It's just an npm package with a couple of wrapper functions, so install it directly to your project by typing `npm install domalt`.

To use these functions, import the package: 

```js 
import domalt from "domalt";
const hello = domalt.newElem({ tag: "p", content: "Hello world!" });
```

## Extending Domalt

Since Domalt is meant as a general helper tool to easily create nested DOM elements (and little more), you are encouraged to extend and tweak it to your liking! If you find bugs, or have possible improvements/changes to propose, don't hesitate to get in contact or use GitHub to create issues/pull requests.

## Docs

The documentation is currently in development, make sure to check back very soon!  
For the time being, the demos should do a pretty good job introducing you to the package:

[DOMALT Demos Index](https://pompyproductions.github.io/domalt/index.html)