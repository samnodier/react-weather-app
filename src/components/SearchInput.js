import React, {useState} from 'react'
import './SearchInput.css';

function SearchInput(props) {
	const [location, setLocation] = useState("");

	const handleChange = (e) => {
		setLocation(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleInput(location);
		setLocation("");
	};
	return (
		<div className="SearchInput">
			<form className="SearchInput__form" onSubmit={handleSubmit}>
				<input className="SearchInput__form-input" type="text" placeholder="Enter location" autoComplete="off" value={location} onChange={handleChange} />
				<button className="SearchInput__form-btn" type="submit">Search</button>
			</form>
		</div>
	)
}

export default SearchInput;