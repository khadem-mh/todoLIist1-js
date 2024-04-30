import handleMangeClass from "./Funcs/handleMangeClass.js"
import welcomUser from "./welcomUser.js"

//Elements
const parentMyList = document.querySelector('#parentMyList')
const addNewList = document.querySelector('#addNewList')
const inpNewListName = document.querySelector('#inpNewListName')
const btnSetNewNameList = document.querySelector('#btnSetNewNameList')
const parentModal = document.querySelector('#parentModal')
const btnCloseModal = document.querySelector('#btnCloseModal')
const addTodoBtn = document.querySelector('#addTodoBtn')
const inputNewTodo = document.querySelector('#inputNewTodo')
const parentTodos = document.querySelector('#parentTodos')
//
let nameListActive = ''
const date = new Date()

//Funcs

welcomUser()

const selectItemList = () => {
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

const checkForExistTextList = () => {
    if (localStorage.getItem('list-todos')) {
        const datasList = JSON.parse(localStorage.getItem('list-todos'))
        if (datasList.length > 1) {
            let indexID = 0
            datasList.forEach(item => {
                parentMyList.insertAdjacentHTML('beforeend', `
                    <li class="active-list" data-id="${indexID++}"> ${item.value} <span class="btnCloseList"><i class="bi bi-x"></i></span></li>
                `)
            })
        } else {
            parentMyList.insertAdjacentHTML('beforeend', `
                <li class="active-list" data-id="0"> ${JSON.parse(localStorage.getItem('list-todos'))[0] ? JSON.parse(localStorage.getItem('list-todos'))[0].value : JSON.parse(localStorage.getItem('list-todos')).value} <span class="btnCloseList"><i class="bi bi-x"></i></span></li>
            `)
        }
        selectItemList()
        let btnCloseListElements = document.querySelectorAll('.btnCloseList')
        btnCloseListElements.forEach(element => {
            let id = element.parentElement.getAttribute('data-id')
            element.addEventListener('click', () => btnCloseListHandler(id))
        })
    }
}

const addNewListHandler = () => {
    if (parentModal.classList.contains('modal-hide')) handleMangeClass(parentModal, 'modal-visible', 'modal-hide')
    else handleMangeClass(parentModal, 'modal-visible', 'modal-hide')
}

const inputKeyCodeHandler = e => e.key === 'Enter' && btnSetNewNameListHandler()

const closeKeyCodeHandler = e => e.key === 'Escape' && parentModal.classList.contains('modal-visible') && btnCloseModalHandler()

const btnCloseListHandler = ID => {
    if (ID == 0) {
        localStorage.removeItem('list-todos')
        parentMyList.innerHTML = ''
    } else {
        const storage = JSON.parse(localStorage.getItem('list-todos'))
        localStorage.removeItem('list-todos')
        const filterTodos = storage.filter(todo => todo.id != ID)
        filterTodos[filterTodos.length - 1].active = true
        localStorage.setItem('list-todos', [JSON.stringify(filterTodos)])
        parentMyList.innerHTML = ''
        checkForExistTextList()
    }
}

const btnSetNewNameListHandler = () => {
    let inpName = inpNewListName.value

    if (inpName.length) {
        handleMangeClass(parentModal, 'modal-hide', 'modal-visible')
        let newList = {}

        if (localStorage.getItem('list-todos')) {
            let datasPast = JSON.parse(localStorage.getItem('list-todos'))

            newList = {
                id: datasPast.length ? datasPast.length : 1,
                value: inpName,
                active: true
            }

            localStorage.removeItem('list-todos')
            if (datasPast.constructor === Array) {
                datasPast.map(item => item.active && (item.active = false))
                localStorage.setItem('list-todos', JSON.stringify([...datasPast, newList]))
            }
            else localStorage.setItem('list-todos', JSON.stringify([datasPast, newList]))
        } else localStorage.setItem('list-todos', JSON.stringify({ id: 0, value: inpName, active: true }))

        parentMyList.insertAdjacentHTML('beforeend', `
            <li class="active-list" data-id="${newList.id === undefined ? 0 : newList.id}"> ${inpName} <span class="btnCloseList"><i class="bi bi-x"></i></span></li>
        `)

        selectItemList()

        let btnCloseListElements = document.querySelectorAll('.btnCloseList')

        btnCloseListElements.forEach(element => {
            let id = element.parentElement.getAttribute('data-id')
            element.addEventListener('click', () => btnCloseListHandler(id))
        })

    }
    nameListActive = inpNewListName.value
    inpNewListName.value = ''
}

const btnCloseModalHandler = () => {
    inpNewListName.value = ''
    handleMangeClass(parentModal, 'modal-hide', 'modal-visible')
}

const addTodoBtnHandler = e => {
    e.preventDefault()
    let inputValTodo = inputNewTodo.value
    if (inputValTodo.length > 1) {
        let dateSaveTodo = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()

        parentTodos.insertAdjacentHTML('beforeend', `
            <div class="user-todo">

                <div class="user-todo__left">
                    <input type="checkbox">
                    <div class="user-todo__info">
                        <p class="user-todo__date">${dateSaveTodo}</p>
                        <p class="user-todo__text">${inputValTodo}</p>
                    </div>
                </div>

                <div class="user-todo__right">
                    <p class="user-todo__list"># Li - ${nameListActive}</p>
                    <i class="bi bi-x"></i>
                </div>

            </div>
        `)
        
        inputNewTodo.value = ''
    }
}

//Events
addNewList.addEventListener('click', addNewListHandler)
btnSetNewNameList.addEventListener('click', btnSetNewNameListHandler)
btnCloseModal.addEventListener('click', btnCloseModalHandler)
inpNewListName.addEventListener('keydown', inputKeyCodeHandler)
addTodoBtn.addEventListener('click', addTodoBtnHandler)
window.addEventListener('keydown', closeKeyCodeHandler)
window.addEventListener('load', checkForExistTextList)