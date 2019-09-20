import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [char, setChar] = useState([]);
	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!

		axios
			.get("https://rickandmortyapi.com/api/character/")
			.then(response => {
				console.log(response.data.results);
				const newData = response.data.results;
				setChar(newData);
			})
			.catch(error => {
				console.error("I don't know Rick", error);
			});
	}, []);

	return (
		<section className="character-list">
			<h2 className="card-container">
				{char.map(item => {
					return <CharacterCard getName={item.name} getStatus={item.status} />;
				})}
			</h2>
		</section>
	);
}
