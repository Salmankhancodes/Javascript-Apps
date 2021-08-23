const whites = ['a', 's', 'd', 'f', 'g', 'h', 'j']
const blacks = ['w', 'e', 'r', 't', 'y']

function cli(key) {
  keyData = document.getElementById(key.dataset.note)
  keyData.currentTime = 1
  key.classList.add('active')
  keyData.play()
  keyData.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

document.addEventListener('keydown', (e) => {
  if (e.repeat) return
  const whitekeyIndex = whites.indexOf(e.key)
  const blackkeyIndex = blacks.indexOf(e.key)
  if (whitekeyIndex > -1) cli(whitekeys[whitekeyIndex])
  if (blackkeyIndex > -1) cli(blackkeys[blackkeyIndex])
})

const keys = document.querySelectorAll('.keys')
const whitekeys = document.querySelectorAll('.white')
const blackkeys = document.querySelectorAll('.black')

keys.forEach((key) => {
  key.addEventListener('click', () => {
    cli(key)
  })
})
