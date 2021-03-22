export const removeSection = (e) => {
    const getNextElement = e.target.parentElement.parentElement.nextSibling
    getNextElement.remove()
}
export const makeFullWith = (e) => {
    const getNextElement = e.target.parentElement.parentElement.parentElement
    if (getNextElement.classList.contains('fullSection')) {
        getNextElement.classList.remove('fullSection')
    } else {
        getNextElement.classList.add('fullSection')
    }
}
export const slideEffect = (e) => {
    const getNextElement = e.target.parentElement.parentElement.nextSibling
    if (getNextElement.classList.contains('slideUp')) {
        getNextElement.classList.remove('slideUp')
    } else {
        getNextElement.classList.add('slideUp')
    }
}

