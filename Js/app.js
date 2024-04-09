import monthNames from "./monthNames.js"
//Elements
const addNewList = document.querySelector('#addNewList')
const inpNewListName = document.querySelector('#inpNewListName')
const btnSetNewNameList = document.querySelector('#btnSetNewNameList')
const parentModal = document.querySelector('#parentModal')
const dateMonth = document.querySelector('.month')
const dateToday = document.querySelector('.today')
const btnCloseModal = document.querySelector('#btnCloseModal')

const addNewListHandler = () => {
    if (parentModal.classList.contains('modal-hide')) {
        parentModal.classList.remove('modal-hide')
        parentModal.classList.add('modal-visible')
    } else {
        parentModal.classList.remove('modal-visible')
        parentModal.classList.add('modal-hide')
    }
}

const btnSetNewNameListHandler = () => {
    console.log(inpNewListName.value);
    inpNewListName.value = ''
    parentModal.classList.remove('modal-visible')
    parentModal.classList.add('modal-hide')
}

const date = new Date()
dateToday.innerHTML = date.getDay()
dateMonth.innerHTML = monthNames[date.getMonth()]

addNewList.addEventListener('click', addNewListHandler)
btnSetNewNameList.addEventListener('click', btnSetNewNameListHandler)