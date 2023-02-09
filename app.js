const inputElem = document.querySelector('input')

let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: '26c4d8ad14b57209671494df9bd9fcb9'
}

function fetchData () {
    let countryValue = inputElem.value

    fetch(`${apiData.url}${countryValue}&&appid=${apiData.key}`).
        then(res => res.json())
        .then(data => {
            console.log(data);

            showdata(data)
        })
}

function showdata (data) {

let cityelem = document.querySelector('.city')
cityelem.innerHTML = `${data.name}, ${data.sys.country}`

let dateelem = document.querySelector('.date')
dateelem.innerHTML = showdate()

let tempelem = document.querySelector('.temp')
tempelem.innerHTML = `${Math.floor(data.main.temp - 273.15) }°c`

let weatherelem = document.querySelector('.weather')
weatherelem.innerHTML = `${data.weather[0].main}`

let tempselem = document.querySelector('.hi-low')
tempselem.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}°c / ${Math.floor(data.main.temp_max - 273.15)}°c`

}

inputElem.addEventListener('keypress', (event) => {
     if(event.keyCode === 13) {
        fetchData()
     }
})

function showdate() {  

     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
     "October", "November", "December"];
    
     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

     let now = new Date

     let day = days[now.getDay()]
     let month = months[now.getMonth()]
     let year = now.getFullYear()
     let date = now.getDate()

     return `${day} ${date} ${month} ${year}`

}

