"use strict";
const STORAGE_KEY = "CALCULATION_HISTORY";
function checkStorage() {
    return typeof (Storage) != 'undefined';
}
function putHistoryData(data) {
    var _a;
    if (checkStorage()) {
        let historyData = [];
        if (localStorage.getItem(STORAGE_KEY) == null) {
            historyData = [];
        }
        else {
            const newLocal = (_a = localStorage.getItem(STORAGE_KEY)) !== null && _a !== void 0 ? _a : "{}";
            historyData = JSON.parse(newLocal);
        }
        historyData.unshift(data);
        if (historyData.length > 5) {
            historyData.pop();
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(historyData));
    }
}
function showHistory() {
    var _a;
    if (checkStorage()) {
        const newLocal = (_a = localStorage.getItem(STORAGE_KEY)) !== null && _a !== void 0 ? _a : "{}";
        return JSON.parse(newLocal);
    }
    else {
        return [];
    }
}
function renderHistory() {
    let history = showHistory();
    let historyList = document.querySelector("#historyList");
    if (historyList) {
        historyList.innerHTML = "";
    }
    for (let h of history) {
        let newTr = document.createElement("tr");
        newTr.innerHTML += "<td>" + h.firstNumber + "</td>";
        newTr.innerHTML += "<td>" + h.operator + "</td>";
        newTr.innerHTML += "<td>" + h.secondNumber + "</td>";
        newTr.innerHTML += "<td>" + h.result + "</td>";
        historyList === null || historyList === void 0 ? void 0 : historyList.appendChild(newTr);
    }
}
renderHistory();
