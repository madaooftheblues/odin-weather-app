import observer from '../observer.js'

const cityInputForm = document.getElementById('city-input-form')
const cityInput = cityInputForm.querySelector('#city-input')
const cityInputBtn = cityInputForm.querySelector('#city-input-btn')

function getFormData() {
    const city = cityInput.value.trim()

    return { city }
}

function reset() {
    cityInput.value = ''
}

function setBusy(bool) {
    cityInputBtn.setAttribute('aria-busy', bool)
}

function handleSubmit(e) {
    e.preventDefault()
    const { city } = getFormData()

    setBusy('true')
    observer.publish('cityQueried', city)

    reset()
}

function bindEvents() {
    cityInputForm.addEventListener('submit', handleSubmit)
}

function init() {
    bindEvents()
}

export default { init, setBusy }
