const SESSION_KEY = "COUNT_SESSION_KEY"
if (sessionStorage.getItem(SESSION_KEY)== undefined) {
    sessionStorage.setItem(SESSION_KEY,"0")
}

function updateCounter2() {
    let span = document.querySelector("span")
    if (span) {
        span.innerText = sessionStorage.getItem(SESSION_KEY) ?? "0"
    }
}

let button2 = document.querySelector("#countButton")

button2?.addEventListener("click",(event)=> {
    let number = parseInt(sessionStorage.getItem(SESSION_KEY) ?? "0")
    number++;
    sessionStorage.setItem(SESSION_KEY,String(number))
    updateCounter2()
})

updateCounter2()

