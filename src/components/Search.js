import React from 'react'
import SearchInput from './SearchInput';
import './Search.css';

function Search(props) {
	function handleInput(city) {
		props.handleSubmit(city);
	}
	return (
		<div className="Search">
			<SearchInput handleInput={handleInput}/>
			<div className="Search__details">
				<p>City Details</p>
				<div>
					<p>Longitudes</p>
					<p>{props.longitudes}</p>
				</div>
				<div>
					<p>Latitudes</p>
					<p>{props.latitudes}</p>
				</div>
				<div>
					<p>Temperature range</p>
					<p>{props.temp_range}</p>
				</div>
				<div>
					<p>Humidity</p>
					<p>{props.humidity}</p>
				</div>
				<div>
					<p>Wind Speed</p>
					<p>{props.wind_speed}</p>
				</div>
				<div>
					<p>Cloudy</p>
					<p>{props.cloudy}</p>
				</div>
			</div>
		</div>
	)
}

export default Search