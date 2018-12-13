export function getAll() {
    return JSON.parse(localStorage.getItem('data'))
}

export function setItem(values) {
    return JSON.stringify(localStorage.setItem('data', values))
}