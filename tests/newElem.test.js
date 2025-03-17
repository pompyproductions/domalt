import { expect, test } from "vitest"
import domalt from "../domalt.js";

test("string parameter → elem with default tag", () => {
        expect(
            domalt.newElem("hello")
        ).toEqual(function () {
            const elem = document.createElement(domalt.getDefaultTag());
            elem.textContent = "hello";
            return elem
        }())
    }
)