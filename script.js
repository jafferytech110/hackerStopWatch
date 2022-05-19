const timeDisplay = document.querySelector('#time-display')
const startButton = document.querySelector('#start-button')
const pasueButton = document.querySelector('#pause-button')
const resetButton = document.querySelector('#reset-button')

let startTime = 0
let elapseTime = 0
let currentTime = 0

let paused = true
let intervalId
let hrs = 0
let mins = 0
let secs = 0

startButton.addEventListener('click',()=>{
    if(paused){
        paused = false
        //DAte.now return time in ms
        startTime = Date.now() - elapseTime
        intervalId = setInterval(updateTime, 1000)
    }
})
pasueButton.addEventListener('click',()=>{
    if(!paused) {
        paused = true
        elapseTime = Date.now - startTime
        clearInterval(intervalId)
        elapseTime = 0
    }
})

resetButton.addEventListener('click',() => {
    paused = true
    clearInterval(intervalId)
    startTime = 0
    elapseTime = 0
    currentTime = 0
    hrs,mins,secs = 0

    timeDisplay.textContent = "00:00:00"
})


function updateTime(){
    elapseTime = Date.now() - startTime

    secs = Math.floor((elapseTime / 1000) % 60)
    mins = Math.floor((elapseTime / (1000 * 60)) % 60)
    hrs = Math.floor((elapseTime / (1000 *60*60)) % 60)

    secs = pad(secs)
    mins = pad(mins)
    hrs = pad(hrs)

    
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`

    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0"+unit
    }
}


