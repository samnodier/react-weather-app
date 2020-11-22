import React from 'react'
import './Details.css';


function Details(props) {
	return (
		<div className='Details'>
			<h1>{props.temperature}</h1>
			<div>
				<p className="Details__city">{props.city}</p>
				<p>{props.time_date}</p>
			</div>
			<div>
				<img src={props.icon} alt={props.status} />
				<p>{props.status}</p>
			</div>
		</div>
	)
}

export default Details;