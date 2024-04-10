const handleMangeClass = (parent, addClass = "", removeClass = "") => {
    removeClass.length && parent.classList.remove(removeClass)
    addClass.length && parent.classList.add(addClass)
}
export default handleMangeClass