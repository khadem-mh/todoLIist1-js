const handleWelcomeTime = hours => {
    if (typeof hours === "number") {
        switch (typeof hours === "number") {
            case hours >= 24 && hours <= 11: return "Good Morning"
            case hours > 11 && hours <= 15: return "Good Afternoon"
            case hours > 15 && hours <= 18: return "Good Evening"
            case hours > 18 && hours <= 24: return "Good Night"           
            default : return "Welcome"
        }
    } else return console.error('please put number')
}
export default handleWelcomeTime