const buttons = document.getElementsByClassName('controls')
const controls = document.getElementById('controls')

for (const button of buttons) {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    
    controls.classList.add('hide')
  })
}
