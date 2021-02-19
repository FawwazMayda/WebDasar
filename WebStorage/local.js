"use strict";
const LOCAL_KEY = "COUNT_LOCAL_KEY";
if (localStorage.getItem(LOCAL_KEY) == undefined) {
    localStorage.setItem(LOCAL_KEY, "0");
}
function updateCounter() {
    var _a;
    let span = document.querySelector("span");
    if (span) {
        span.innerText = (_a = localStorage.getItem(LOCAL_KEY)) !== null && _a !== void 0 ? _a : "0";
    }
}
let button = document.querySelector("#countButton");
let clear = document.querySelector("#clearButton");
button === null || button === void 0 ? void 0 : button.addEventListener("click", (event) => {
    var _a;
    let number = parseInt((_a = localStorage.getItem(LOCAL_KEY)) !== null && _a !== void 0 ? _a : "0");
    number++;
    localStorage.setItem(LOCAL_KEY, String(number));
    updateCounter();
});
clear === null || clear === void 0 ? void 0 : clear.addEventListener("click", (event) => {
    localStorage.setItem(LOCAL_KEY, "0");
    updateCounter();
});
updateCounter();
