const buttons = document.getElementsByClassName('controls')
const controls = document.getElementById('controls')
const vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate

for (const button of buttons) {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()

    controls.classList.add('hide')
    vibrate(0)
  })
}

vibrate([1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500])
