import React, { useState } from "react";

const SearchForm = props => {
	console.log(props);
	const [info, setInfo] = useState({
		name: ""
	});

	const changeHandler = event => {
		setInfo({ ...info, [event.target.name]: event.target.value });
		console.log(event.target.name);
	};

	const submitForm = event => {
		event.preventDefault();
		const newInfo = {
			...info,
			id: Date.now()
		};
		props.filter(newInfo);
		setInfo({ name: "" });
	};
	return (
		<section className="search-form">
			<form onSubmit={submitForm}>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					name="name"
					value={info.name}
					onChange={changeHandler}
				/>

				<button className="search-button" type="submit">
					Search
				</button>
			</form>
		</section>
	);
};

export default SearchForm;
