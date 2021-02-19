const LOCAL_KEY = "COUNT_LOCAL_KEY"
if (localStorage.getItem(LOCAL_KEY)== undefined) {
    localStorage.setItem(LOCAL_KEY,"0")
}

function updateCounter() {
    let span = document.querySelector("span")
    if (span) {
        span.innerText = localStorage.getItem(LOCAL_KEY) ?? "0"
    }
}

let button = document.querySelector("#countButton")

let clear = document.querySelector("#clearButton")

button?.addEventListener("click",(event)=> {
    let number = parseInt(localStorage.getItem(LOCAL_KEY) ?? "0")
    number++;
    localStorage.setItem(LOCAL_KEY,String(number))
    updateCounter()
})

clear?.addEventListener("click",(event)=> {
    localStorage.setItem(LOCAL_KEY,"0")
    updateCounter()
})

updateCounter()