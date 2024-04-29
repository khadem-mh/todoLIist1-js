const titleWelcome = document.querySelector('.title-main')
const dateMonth = document.querySelector('.month')
const dateToday = document.querySelector('.today')
const determineStatus = document.querySelector('.determine-status')
//
import handleWelcomeTime from "./Funcs/handleWelcomeTime.js"
import monthNames from "./monthNames.js"

const welcomUser = () => {
    const date = new Date()
    titleWelcome.innerHTML = handleWelcomeTime(date.getHours())
    determineStatus.innerHTML = date.getHours() >= 1 && date.getHours() <= 18 ? "today" : "tonight"
    dateToday.innerHTML = date.getDate()
    dateMonth.innerHTML = monthNames[date.getMonth()]
}
export default welcomUser