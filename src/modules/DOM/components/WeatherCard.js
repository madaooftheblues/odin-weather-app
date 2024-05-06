export default function WeatherCard(head, src, foot) {
    const card = document.createElement('article')
    const header = document.createElement('small')
    const img = document.createElement('img')
    const footer = document.createElement('small')

    card.classList.add('weather-card')
    header.textContent = head
    img.src = src
    footer.textContent = foot
    card.append(head)
    card.append(img)
    card.append(foot)

    return card
}
