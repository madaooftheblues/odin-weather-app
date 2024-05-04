import observer from '../observer.js'

const cityInputForm = document.getElementById('city-input-form')
const cityInput = cityInputForm.querySelector('#city-input')

function getFormData() {
    const city = cityInput.value.trim()

    return { city }
}

function reset() {
    cityInput.value = ''
}

function handleSubmit(e) {
    e.preventDefault()
    const { city } = getFormData()

    observer.publish('cityQueried', city)

    reset()
}

function bindEvents() {
    cityInputForm.addEventListener('submit', handleSubmit)
}

function init() {
    bindEvents()
}

export default { init }
