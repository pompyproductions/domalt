import { expect, test } from "vitest";
import domalt from "../domalt.js";

test("newElemDl → array input", () => {

    const expectedResult = function () {
        const items = {
            "Term 1": "Definition 1",
            "Term 2": "Definition 2"
        }
        const listElem = document.createElement("dl");
        for (let term in items) {
            const termElem = document.createElement("dt");
            termElem.textContent = term;
            const defElem = document.createElement("dd");
            defElem.textContent = items[term];
            listElem.append(termElem, defElem);
        }
        return listElem
    }();

    expect(
        domalt.newElemDl([
            ["Term 1", "Definition 1"],
            ["Term 2", "Definition 2"]
        ])
    ).toEqual(
        expectedResult
    );
})

test("newElemDl → object input", () => {

    const expectedResult = function () {
        const items = {
            "Term 1": "Definition 1",
            "Term 2": "Definition 2"
        }
        const listElem = document.createElement("dl");
        for (let term in items) {
            const termElem = document.createElement("dt");
            termElem.textContent = term;
            const defElem = document.createElement("dd");
            defElem.textContent = items[term];
            listElem.append(termElem, defElem);
        }
        return listElem
    }();

    expect(
        domalt.newElemDl({
            "Term 1": "Definition 1",
            "Term 2": "Definition 2"
        })
    ).toEqual(
        expectedResult
    );
})