setInterval(setTime,1000)

const hourHand= document.querySelector('[data-hour-hand]')
const minuteHand= document.querySelector('[data-minute-hand]')
const secondHand= document.querySelector('[data-second-hand]')
function setTime(){
    const currentDate= new Date()
    const secondsRatio= currentDate.getSeconds()/60
    const minutesRatio= (secondsRatio +currentDate.getMinutes())/60
    const hoursRatio=(minutesRatio + currentDate.getHours())/12
    setMoveTime(secondHand , secondsRatio)
    setMoveTime(minuteHand , minutesRatio)
    setMoveTime(hourHand , hoursRatio)
}
function setMoveTime(element,rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)

}

setTime()
