"use strict";
let allChevronDownArrow = document.querySelectorAll(".fa-chevron-down");
let allDropBody = document.querySelectorAll(".drop-body");
let collapsedClass = "display-none";
function collapsed(at) {
    let el = allDropBody[at];
    let rotateElem = allChevronDownArrow[at];
    if (el.classList.contains(collapsedClass)) {
        el.classList.remove(collapsedClass);
        rotateElem.style.transform = 'rotate(180deg)';
    }
    else {
        el.classList.add(collapsedClass);
        rotateElem.style.transform = 'rotate(0deg)';
    }
}
for (let i = 0; i < allChevronDownArrow.length; i++) {
    let el = allChevronDownArrow[i];
    el.addEventListener("click", (event) => {
        collapsed(i);
    });
}
console.log("Ball");
