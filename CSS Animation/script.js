"use strict";
let el = document.querySelector("div");
let toAdd = true;
el === null || el === void 0 ? void 0 : el.addEventListener("click", (event) => {
    if (toAdd) {
        el === null || el === void 0 ? void 0 : el.classList.add("animate");
        console.log("adding");
    }
    else {
        el === null || el === void 0 ? void 0 : el.classList.remove("animate");
        console.log("rmemoving");
    }
    toAdd = !toAdd;
});
