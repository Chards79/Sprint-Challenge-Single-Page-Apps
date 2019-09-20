import React, { useState } from "react";

const SearchForm = props => {
	console.log(props);
	const [info, setInfo] = useState({
		name: "",
		status: ""
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
		props.addMember(newInfo);
		setInfo({ name: "", status: "" });
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
				<label htmlFor="status">Status:</label>
				<input
					type="text"
					name="status"
					value={info.status}
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
