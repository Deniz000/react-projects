import { useState, useEffect } from 'react'
import { Cities } from './listOfCities'

function Weather() {
    const [city, setCity] = useState(null)


    useEffect(()=>{
        const lotlu = 'https://api.openweathermap.org/data/2.5/weather?lat=36.9863599&lon=35.3252861&appid=883489dfb6916d456613cafaa7dda332'
        const sehir = 'http://api.openweathermap.org/geo/1.0/direct?q=Amasya,TR&limit=1&appid=883489dfb6916d456613cafaa7dda332'
        fetch(lotlu)
        .then(response => response.json())
        .then(data => setCity(data))
    },[])
    return (
        <>
        {JSON.stringify(city)}
        </>
    )
}

export default Weather