const secondHand = document.querySelector('.secondHand')
const minuteHand = document.querySelector('.minuteHand')
const hourHand = document.querySelector('.hourHand')
const allHands = document.querySelectorAll('.hand')

setInterval(() => {
  const now = new Date()
  const sec = now.getSeconds()
  const min = now.getMinutes()
  const hrs = now.getHours()

  const degSec = sec * 360 / 60 + 90
  const degMin = min * 360 / 60 + 90
  const degHrs = hrs * 360 / 12 + 90

  if (degSec === 90) {
    // or if(sec === 0)
    allHands.forEach(hand => (hand.style.transition = 'none'))
  } else {
    // resets the inline style by removing it so the element can revert back to the stylesheet.
    allHands.forEach(hand => (hand.style.transition = ''))
  }

  secondHand.style.transform = `rotate(${degSec}deg)`
  minuteHand.style.transform = `rotate(${degMin}deg)`
  hourHand.style.transform = `rotate(${degHrs}deg)`
}, 1000)
