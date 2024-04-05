const dateMonth = document.querySelector('.month')
const dateToday = document.querySelector('.today') 
const date = new Date()
dateToday.innerHTML = date.getDay()
dateMonth.innerHTML = date.getMonth() + 1