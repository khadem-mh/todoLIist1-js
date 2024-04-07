import monthNames from "./monthNames.js"
//Elements
const addNewList = document.querySelector('#addNewList')
const inpNewListName = document.querySelector('#inpNewListName').value
const btnSetNewNameList = document.querySelector('#btnSetNewNameList')
const parentModal = document.querySelector('#parentModal')
const dateMonth = document.querySelector('.month')
const dateToday = document.querySelector('.today')

const addNewListHandler = () => {
    if (condition) {
        parentModal.classList.remove('modal-hide')
        parentModal.classList.add('modal-visible')
    } else {

    }
}

const btnSetNewNameListHandler = () => {

}

const date = new Date()
dateToday.innerHTML = date.getDay()
dateMonth.innerHTML = monthNames[date.getMonth()]

addNewList.addEventListener('click', addNewListHandler)
btnSetNewNameList.addEventListener('click', btnSetNewNameListHandler)