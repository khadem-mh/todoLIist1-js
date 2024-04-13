import monthNames from "./monthNames.js"
import handleMangeClass from "./Funcs/handleMangeClass.js"
//Elements
const parentMyList = document.querySelector('#parentMyList')
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

const inputKeyCodeHandler = (e) => {
   if (e.key === 'Enter') {
    console.log('ok');
   }
}

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

addNewList.addEventListener('click', addNewListHandler)
btnSetNewNameList.addEventListener('click', btnSetNewNameListHandler)
inpNewListName.addEventListener('keydown', inputKeyCodeHandler)
btnCloseModal.addEventListener('click', btnCloseModalHandler)