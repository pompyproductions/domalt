import { expect, test } from "vitest"
import domalt from "../domalt.js";

test("String parameter → elem with default tag", () => {
    expect(
        domalt.newElem("hello")
    ).toEqual(function() {
        const elem = document.createElement(domalt.getDefaultTag());
        elem.textContent = "hello";
        return elem
    }());

    expect(function() {
        domalt.setDefaultTag("h1");
        const elem = domalt.newElem("hello");
        domalt.setDefaultTag("p");
        return elem
    }()).toEqual(function() {
        const elem = document.createElement("h1");
        elem.textContent = "hello";
        return elem
    }());
});

test("Array parameter → single element with tag & content", () => {
    expect(
        domalt.newElem(["h2", "hello"])
    ).toEqual(function() {
        const elem = document.createElement("h2");
        elem.textContent = "hello";
        return elem
    }())
});

test("Object parameter (options) → custom element", () => {
    // arrange
    const expectedResult = function () {
        const container = document.createElement("main");
        container.classList.add("class-one", "class-two");
        container.id = "id-one";
        const elem = document.createElement("p");
        elem.textContent = "hello";
        container.append(elem);
        return container
    };
    expect(domalt.newElem({
        tag: "main",
        id: "id-one",
        class: ["class-one", "class-two"],
        children: ["hello"]
    })).toEqual(expectedResult());
})

// ---
// set attributes

test("Set attributes with array", () => {
    const expectedResult = function() {
        const elem = document.createElement("div");
        elem.setAttribute("data-attr", "attribute content");
        elem.setAttribute("foo", "bar");
        return elem
    }
    expect(
        domalt.newElem({
            attributes: [
                ["data-attr", "attribute content"],
                ["foo", "bar"]
            ]
        })
    ).toEqual(
        expectedResult()
    )
})

test("Set attributes with object", () => {
    const expectedResult = function() {
        const elem = document.createElement("div");
        elem.setAttribute("data-attr", "attribute content");
        elem.setAttribute("foo", "bar");
        return elem
    }
    expect(
        domalt.newElem({
            attributes: {
                "data-attr": "attribute content",
                "foo": "bar"
            }
        })
    ).toEqual(
        expectedResult()
    )
})

