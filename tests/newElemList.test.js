import { expect, test } from "vitest"
import domalt from "../domalt.js";

test("Basic unordered list", () => {
    const expectedResult = function () {
        const listElem = document.createElement("ul");
        for (let txt of ["List element 1", "List element 2"]) {
            const listItem = document.createElement("li");
            listItem.textContent = txt;
            listElem.append(listItem);
        }
        return listElem;
    }

    expect(
        domalt.newElemList(["List element 1", "List element 2"])
    ).toEqual(
        expectedResult()
    )
});

test("Options → ordered list", () => {
    const expectedResult = function () {
        const listElem = document.createElement("ol");
        for (let txt of ["List element 1", "List element 2"]) {
            const listItem = document.createElement("li");
            listItem.textContent = txt;
            listElem.append(listItem);
        }
        return listElem;
    }

    expect(
        domalt.newElemList(
            ["List element 1", "List element 2"], { isOrdered: true })
    ).toEqual(
        expectedResult()
    )
})

test("Options → nav", () => {
    const expectedResult = function () {
        const wrapperElem = document.createElement("nav");
        const listElem = document.createElement("ul");
        for (let content of [["List element 1", "url1"], ["List element 2", "url2"]]) {
            const listItem = document.createElement("li");
            const anchorItem = document.createElement("a");
            anchorItem.textContent = content[0];
            anchorItem.setAttribute("href", content[1]);
            listItem.append(anchorItem);
            listElem.append(listItem);
        }
        wrapperElem.append(listElem);
        return wrapperElem;
    }

    expect(
        domalt.newElemList(
            [["List element 1", "url1"], ["List element 2", "url2"]], 
            { isNav: true }
        )
    ).toEqual(
        expectedResult()
    )
})

test("Options → ordered nav", () => {
    const expectedResult = function () {
        const wrapperElem = document.createElement("nav");
        const listElem = document.createElement("ol");
        for (let content of [["List element 1", "url1"], ["List element 2", "url2"]]) {
            const listItem = document.createElement("li");
            const anchorItem = document.createElement("a");
            anchorItem.textContent = content[0];
            anchorItem.setAttribute("href", content[1]);
            listItem.append(anchorItem);
            listElem.append(listItem);
        }
        wrapperElem.append(listElem);
        return wrapperElem;
    }

    expect(
        domalt.newElemList(
            [["List element 1", "url1"], ["List element 2", "url2"]], 
            { isNav: true, isOrdered: true }
        )
    ).toEqual(
        expectedResult()
    )
})