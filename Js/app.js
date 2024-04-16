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
determineStatus.innerHTML = date.getHours() >= 1 && date.getHours() <= 19 ? "today" : "tonight"
dateToday.innerHTML = date.getDate()
dateMonth.innerHTML = monthNames[date.getMonth()]

//Funcs

const checkForExistTextList = () => {
    if (localStorage.getItem('list-todos')) {
        if (JSON.parse(localStorage.getItem('list-todos')).length > 1) {
            JSON.parse(localStorage.getItem('list-todos')).forEach(item => {
                parentMyList.insertAdjacentHTML('beforeend', `
                    <li class="active-list"> ${item.value} <i class="bi bi-x"></i></li>
                `)
            })
        } else {
            parentMyList.insertAdjacentHTML('beforeend', `
            <li class="active-list"> ${JSON.parse(localStorage.getItem('list-todos')).value} <i class="bi bi-x"></i></li>
        `)
        }

    }
}

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

        if (localStorage.getItem('list-todos')) {
            let datasPast = JSON.parse(localStorage.getItem('list-todos'))
            let newList = {
                id: localStorage.length + 1,
                value: inpName,
                active: false
            }
            let y = datasPast.length && datasPast.map(item => item)
            console.log(y);
            localStorage.removeItem('list-todos')
            localStorage.setItem('list-todos', JSON.stringify([datasPast.constructor === Array ? datasPast.map(item => item) : datasPast , newList]))

        } else localStorage.setItem('list-todos', JSON.stringify({ id: localStorage.length + 1, value: inpName, active: true }))

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
window.addEventListener('load', checkForExistTextList)