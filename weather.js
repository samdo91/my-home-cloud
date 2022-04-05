const weather = document.querySelector("#weather")



const api = "7b2d6ee8c54e13e477e5028a1f388f7b"



function ongeook(Position) {
    const lat = Position.coords.latitude
    const lon = Position.coords.longitude
    const url = (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`)
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherreport = document.querySelector("#weather span:first-child")
            const cityreport = document.querySelector("#weather span:last-child")

            weatherreport.innerHTML = data.weather[0].main
            cityreport.innerHTML = data.name
        })
}



function ongeoxx() {
    alert("당신이 어디있는지 모르겠어요. 날씨도요.")
}

navigator.geolocation.getCurrentPosition(ongeook, ongeoxx)