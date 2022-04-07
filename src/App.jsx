
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
<script src="https://kit.fontawesome.com/711d2e4683.js" crossorigin="anonymous"></script>

function App() {


  const [city, setCity] = useState(null)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bbfdc70c665b3dce85bd4b8d27165748&units=metric`
      const response = await fetch(url)
      // console.log(response)
      const resJson = await response.json()
      console.log(resJson)
      setCity(resJson.main)

     

}


fetchApi()
}, [search] )

let fecha = new Date()

  

let hora = fecha.getHours()
let min = fecha.getMinutes()
let dia = fecha.getDate()
let mes = fecha.getMonth()
let año = fecha.getFullYear()




return (
  <>
    <div className="navbar-container">
      <Navbar></Navbar>
    </div>


  

    <div className="container">
      <div className="weather-side">
        <div className="weather-gradient"></div>
        {
          <div className="date-container">
            <input type="text" placeholder='City' className='input-text' onChange={(event) => { setSearch(event.target.value) }} />
            <h2 className="day-dayname">Sunday</h2>
            <p>   {hora} : {min}  </p>
            <p className="date-day">  {dia} /   {mes + 1} /   {año} </p>
            <i className=" location-icon fa-solid fa-location-dot"></i>
            <span className="location"> {search} </span>
          </div>
        }
        {
          !city ? (
            <div> </div>
          ) : (
            <div className="weather-container">
              <i className="weather-icon fa-solid fa-temperature-half"></i>
              <h1 className="weather-temp">  {city.temp} °C  </h1>
              <h3 className="weather-desc">Sunny</h3>
            </div>
          )
        }




      </div>

    </div>


<p>Creado por <a href="https://www.linkedin.com/in/marcelo-resola/">Marcelo Resola</a> </p>

  </>
);

}

export default App;
