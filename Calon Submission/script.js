"use strict";
let allChevronDownArrow = document.querySelectorAll(".fa-chevron-down");
let allDropBody = document.querySelectorAll(".drop-body");
let allDropHeader = document.querySelectorAll(".drop-header");
let collapsedClass = "display-none";
function collapsed(at) {
    let el = allDropBody[at];
    let rotateElem = allChevronDownArrow[at];
    if (el.classList.contains(collapsedClass)) {
        el.classList.remove(collapsedClass);
        //el.style.height = "0"
        rotateElem.style.transform = 'rotate(180deg)';
    }
    else {
        el.classList.add(collapsedClass);
        //el.style.height = "100%"
        rotateElem.style.transform = 'rotate(0deg)';
    }
}
for (let i = 0; i < allDropHeader.length; i++) {
    let el = allDropHeader[i];
    el.addEventListener("click", (event) => {
        collapsed(i);
    });
}
console.log("Ball");
