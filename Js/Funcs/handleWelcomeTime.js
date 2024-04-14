const handleWelcomeTime = hours => {
    if (typeof hours === "number") {
        switch (hours) {
            case hours >= 0 && hours <= 11: return "Good Morning"
            case hours >= 11 && hours <= 16: return "Good Afternoon"
            case hours >= 16 && hours <= 19: return "Good Evening"
            case hours >= 19 && hours <= 0: return "Good Night"           
        }
    } else return console.error('please put number')
}
export default handleWelcomeTime