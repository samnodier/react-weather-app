import React, { useState, useEffect } from 'react'
import Details from './components/Details';
import Search from './components/Search';
import './App.css';
import background from './images/background.jpg';

function App() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [data, setData] = useState([]);
	const [url, setURL] = useState("");

	function handleSubmit(city) {
		const API_KEY = '0fa0eb1029b422ba434ffff1758bff25';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
		setURL(url);
		// // const icon = `"http://openweathermap.org/img/wn/{data['weather'][0]['icon']}@2x.png")`
		// fetch(url)
		// 	.then(res => res.json())
		// 	.then(
		// 		(result) => {
		// 			setIsLoaded(true);
		// 			setData(result);
		// 		},
		// 		// Catch erros
		// 		(error) => {
		// 			setIsLoaded(true);
		// 			setError(error);
		// 		}
		// 	)

		// if (error) {
		// 	console.log(`Error: ${error.message}`);
		// } else if (!isLoaded) {
		// 	console.log("Loading...");
		// }
		// console.log(data);
	}

	// useEffect(() => {
	// 	handleSubmit();
	// });
	return (
		<div className="App">
			<div id="background">
			  <img src={background} width="100%" height="100%" />
			</div>
			<div className="App__window">
				{
					if(isLoaded) {
						<Details temperature={`${data["main"]["temp"]}°`} city={`${data["name"]}, ${data["sys"]["country"]}`} time_date="06:09 - Monday, 9 Sep 2020" icon={`http://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png`} status={data["weather"][0]["main"]} />
						<Search handleSubmit={handleSubmit} longitudes={data["coord"]["lon"]} latitudes={data["coord"]["lat"]} temp_range={`${data["main"]["temp_min"]} - ${data["main"]["temp_max"]}`} humidity={`${data["main"]["humidity"]}%`} wind_speed={`${data["wind"]["speed"]}m/s`} cloudy={`${data["clouds"]["all"]}%`} />

					}
				}
			</div>
		</div>
	);
}

export default App;
