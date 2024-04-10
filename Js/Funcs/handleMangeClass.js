const handleMangeClass = (parent, addClass = "", removeClass = "") => {
    parent.classList.remove(removeClass)
    parent.classList.add(addClass)
}
export default handleMangeClass