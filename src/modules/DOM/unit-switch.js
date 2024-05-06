import observer from '../observer.js'

const unitSwitch = document.getElementById('unit')

let unit = false

function setUnit() {
    unit = unitSwitch.checked
    observer.publish('unitSwitched', unit)
}

function getUnit() {
    return unit
}

function bindEvents() {
    unitSwitch.addEventListener('change', setUnit)
}

function init() {
    bindEvents()
}

export default { init, getUnit }
