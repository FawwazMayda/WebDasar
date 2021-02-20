let el = document.querySelector("div")
let toAdd = true
 el?.addEventListener("click",(event)=> {
    if(toAdd) {
        el?.classList.add("animate")
        console.log("adding")
    } else {
        el?.classList.remove("animate")
        console.log("rmemoving")
    }
    toAdd = !toAdd
 })