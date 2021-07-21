const timeFunc = () => {
  let time = new Date()
  let hrs = time.getHours()
  let mins = time.getMinutes()
  let secs = time.getSeconds()
  let period = 'AM'

  if (hrs == 0) {
    hrs = 12
  } else if (hrs == 12) {
    period = 'PM'
  } else if (hrs > 12) {
    hrs = hrs - 12
    period = 'PM'
  }

  hrs = hrs < 10 ? `0${hrs}` : hrs
  mins = mins < 10 ? `0${mins}` : mins
  secs = secs < 10 ? `0${secs}` : secs
  let displayTime = `${hrs}:${mins}:${secs} ${period}`
  document.getElementsByClassName('time')[0].innerHTML = displayTime
}

setInterval(timeFunc, 1000)
