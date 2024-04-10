import monthNames from "./monthNames.js"
import handleMangeClass from "./Funcs/handleMangeClass.js"
//Elements
const addNewList = document.querySelector('#addNewList')
const inpNewListName = document.querySelector('#inpNewListName')
const btnSetNewNameList = document.querySelector('#btnSetNewNameList')
const parentModal = document.querySelector('#parentModal')
const dateMonth = document.querySelector('.month')
const dateToday = document.querySelector('.today')
const btnCloseModal = document.querySelector('#btnCloseModal')

const date = new Date()
dateToday.innerHTML = date.getDay()
dateMonth.innerHTML = monthNames[date.getMonth()]

const addNewListHandler = () => {
    if (parentModal.classList.contains('modal-hide')) handleMangeClass(parentModal, 'modal-visible', 'modal-hide')
    else handleMangeClass(parentModal, 'modal-visible', 'modal-hide')
}

const btnSetNewNameListHandler = () => {
    let inpName = inpNewListName.value
    if (inpName.length) handleMangeClass(parentModal, 'modal-hide', 'modal-visible')
    inpNewListName.value = ''
}

const btnCloseModalHandler = () => {
    inpNewListName.value = ''
    handleMangeClass(parentModal, 'modal-hide', 'modal-visible')
}

addNewList.addEventListener('click', addNewListHandler)
btnSetNewNameList.addEventListener('click', btnSetNewNameListHandler)
btnCloseModal.addEventListener('click', btnCloseModalHandler)