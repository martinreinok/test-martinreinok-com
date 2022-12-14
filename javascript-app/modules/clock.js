
export function clockApp() {
    setInterval(updateClock, 1)

    const hourHand = document.querySelector('[data-hour-hand]')
    const minuteHand = document.querySelector('[data-minute-hand]')
    const secondHand = document.querySelector('[data-second-hand]')
    const millisecondHand = document.querySelector('[data-millisecond-hand]')

    function updateClock() {
    const currentDateClock = new Date()
    const millisecondsRatio = currentDateClock.getMilliseconds() / 1000
    const secondsRatio = currentDateClock.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDateClock.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDateClock.getHours()) / 12
    setRotation(millisecondHand, millisecondsRatio)
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
    }

    function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
    }

    updateClock()
  }

