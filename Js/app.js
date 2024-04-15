import monthNames from "./monthNames.js"
import handleMangeClass from "./Funcs/handleMangeClass.js"
import handleWelcomeTime from "./Funcs/handleWelcomeTime.js"
//Elements
const parentMyList = document.querySelector('#parentMyList')
const addNewList = document.querySelector('#addNewList')
const inpNewListName = document.querySelector('#inpNewListName')
const btnSetNewNameList = document.querySelector('#btnSetNewNameList')
const parentModal = document.querySelector('#parentModal')
const titleWelcome = document.querySelector('.title-main')
const dateMonth = document.querySelector('.month')
const dateToday = document.querySelector('.today')
const determineStatus = document.querySelector('.determine-status')
const btnCloseModal = document.querySelector('#btnCloseModal')

const date = new Date()
titleWelcome.innerHTML = handleWelcomeTime(date.getHours())
determineStatus.innerHTML = date.getHours() >= 24 &&  date.getHours() <= 19 ? "today" : "tonight"
dateToday.innerHTML = date.getDate()
dateMonth.innerHTML = monthNames[date.getMonth()]

//Funcs

const addNewListHandler = () => {
    if (parentModal.classList.contains('modal-hide')) handleMangeClass(parentModal, 'modal-visible', 'modal-hide')
    else handleMangeClass(parentModal, 'modal-visible', 'modal-hide')
}

const inputKeyCodeHandler = e => e.key === 'Enter' && btnSetNewNameListHandler()

const closeKeyCodeHandler = e => e.key === 'Escape' && parentModal.classList.contains('modal-visible') && btnCloseModalHandler()

const btnSetNewNameListHandler = () => {
    let inpName = inpNewListName.value
    if (inpName.length) {
        handleMangeClass(parentModal, 'modal-hide', 'modal-visible')

        parentMyList.insertAdjacentHTML('beforeend', `
            <li class="active-list"> ${inpName} <i class="bi bi-x"></i></li>
        `)

        if (Array.of(parentMyList)[0].children.length !== 1) {
            let liItem = [...Array.of(parentMyList)[0].children]
            liItem.slice(0, liItem.length - 1).forEach(item => {
                if (item.classList.contains('active-list')) {
                    handleMangeClass(item, '', 'active-list')
                    item.children[0].remove()
                }
            })
        }

    }

    inpNewListName.value = ''
}

const btnCloseModalHandler = () => {
    inpNewListName.value = ''
    handleMangeClass(parentModal, 'modal-hide', 'modal-visible')
}

//Events
addNewList.addEventListener('click', addNewListHandler)
btnSetNewNameList.addEventListener('click', btnSetNewNameListHandler)
btnCloseModal.addEventListener('click', btnCloseModalHandler)
inpNewListName.addEventListener('keydown', inputKeyCodeHandler)
window.addEventListener('keydown', closeKeyCodeHandler)