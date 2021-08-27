Buttons = document.querySelectorAll('Button')
outputScreen = document.getElementsByClassName('current-operand')[0]
currentOperand = ''
for (const button of Buttons) {
  button.addEventListener('click', () => {
    if (button.innerHTML === '.') {
      if (currentOperand.includes('.')) return
    }

    if (button.innerHTML === '=') {
      outputScreen.innerHTML = eval(currentOperand)
      currentOperand = outputScreen.innerHTML
    } else if (button.innerHTML === 'AC') {
      currentOperand = ''
      outputScreen.innerHTML = currentOperand
    } else if (button.innerHTML === 'DEL') {
      currentOperand.pop()
    } else {
      currentOperand += button.innerHTML
      outputScreen.innerHTML = currentOperand
    }
  })
}
