interface CalculationHistory {
    firstNumber: string,
    operator: string,
    secondNumber: string,
    result: string
}

const STORAGE_KEY = "CALCULATION_HISTORY"

function checkStorage() {
    return typeof(Storage)!= 'undefined'
}

function putHistoryData(data: CalculationHistory) {
    if(checkStorage()) {
        let historyData: Array<CalculationHistory> = []
        if(localStorage.getItem(STORAGE_KEY)==null) {
            historyData = []
        } else {
            const newLocal = localStorage.getItem(STORAGE_KEY) ?? "{}"
            historyData = JSON.parse(newLocal)
        }

        historyData.unshift(data)
        if (historyData.length > 5) {
            historyData.pop()
        }

        localStorage.setItem(STORAGE_KEY,JSON.stringify(historyData))
    }
}

function showHistory() {
    if(checkStorage()) {
        const newLocal = localStorage.getItem(STORAGE_KEY) ?? "{}"
        return JSON.parse(newLocal)
    } else {
        return []
    }
}

function renderHistory() {
    let history: Array<CalculationHistory> = showHistory()
    let historyList = document.querySelector("#historyList")
    if (historyList) {
        historyList.innerHTML = ""
    }
    for (let h of history) {
        let newTr = document.createElement("tr")
        newTr.innerHTML += "<td>" + h.firstNumber + "</td>"
        newTr.innerHTML += "<td>" + h.operator + "</td>"
        newTr.innerHTML += "<td>" + h.secondNumber + "</td>"
        newTr.innerHTML += "<td>" + h.result + "</td>"

        historyList?.appendChild(newTr)
    }
}

renderHistory()
