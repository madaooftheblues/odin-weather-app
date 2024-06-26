const dayMap = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
}

const monthMap = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
}

function dateToAlpha(dateStr) {
    if (!dateStr) return ''
    const d = new Date(dateStr)

    const day = dayMap[d.getDay()]
    const month = monthMap[d.getMonth()]
    const date = d.getDate()
    const year = d.getFullYear()

    return `${day}, ${date} ${month}, ${year}`
}

function dateToDay(dateStr) {
    if (!dateStr) return ''
    const d = new Date(dateStr)
    const dayName = dayMap[d.getDay()]
    return dayName || ''
}

export { dateToAlpha, dateToDay }
