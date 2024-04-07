import monthNames from "./monthNames.js"
//Elements
const addNewList = document.querySelector('#addNewList')
const dateMonth = document.querySelector('.month')
const dateToday = document.querySelector('.today') 


const date = new Date()
dateToday.innerHTML = date.getDay()
dateMonth.innerHTML = monthNames[date.getMonth()] 

addNewList.addEventListener('click', addNewListHandler)