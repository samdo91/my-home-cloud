const clock= document.querySelector("#clock")

console.log(clock)

function clocking(){
  const date= new Date()
  const hours= String(date.getHours()).padStart(2,"0")
  const minutes= String(date.getMinutes()).padStart(2,"0")
  const Seconds= String(date.getSeconds()).padStart(2,"0")
  clock.innerHTML=(`${hours}:${minutes}:${Seconds}`)
  
}

clocking()

setInterval(clocking, 1000)



