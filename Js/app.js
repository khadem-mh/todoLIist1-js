import monthNames from "./monthNames.js"
//Elements
const addNewList = document.querySelector('#addNewList')
const inpNewListName = document.querySelector('#inpNewListName').value
const btnSetNewNameList = document.querySelector('#btnSetNewNameList').value
const dateMonth = document.querySelector('.month')
const dateToday = document.querySelector('.today')

const addNewListHandler = () => {

}

const btnSetNewNameListHandler = () => {

}

const date = new Date()
dateToday.innerHTML = date.getDay()
dateMonth.innerHTML = monthNames[date.getMonth()]

addNewList.addEventListener('click', addNewListHandler)
btnSetNewNameList.addEventListener('click', btnSetNewNameListHandler)