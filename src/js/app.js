const buttons = document.getElementsByClassName('controls')
const controls = document.getElementById('controls')
const vibrate = (window.navigator.vibrate || window.navigator.webkitVibrate || window.navigator.mozVibrate || window.navigator.msVibrate).bind(window.navigator)

for (const button of buttons) {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()

    controls.classList.add('hide')
    vibrate(0)
  })
}

window.scrollTo(0, 1)
vibrate([1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500])
