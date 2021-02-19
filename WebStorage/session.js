"use strict";
const SESSION_KEY = "COUNT_SESSION_KEY";
if (sessionStorage.getItem(SESSION_KEY) == undefined) {
    sessionStorage.setItem(SESSION_KEY, "0");
}
function updateCounter2() {
    var _a;
    let span = document.querySelector("span");
    if (span) {
        span.innerText = (_a = sessionStorage.getItem(SESSION_KEY)) !== null && _a !== void 0 ? _a : "0";
    }
}
let button2 = document.querySelector("#countButton");
button2 === null || button2 === void 0 ? void 0 : button2.addEventListener("click", (event) => {
    var _a;
    let number = parseInt((_a = sessionStorage.getItem(SESSION_KEY)) !== null && _a !== void 0 ? _a : "0");
    number++;
    sessionStorage.setItem(SESSION_KEY, String(number));
    updateCounter2();
});
updateCounter2();
