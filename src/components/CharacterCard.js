import React from "react";
import styled from "styled-components";

const Card = styled.div`
	background-image: linear-gradient(to bottom right, lightgreen, darkgreen);
	color: #99ffff;
	h3 {
		color: black;
	}
	p {
		color: black;
	}
	width: 300px;
	height: 200px;
	border: ridge 5px dodgerblue;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 20px;
	text-align: center;
	text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
		-1px 1px 0 #000, 1px 1px 0 #000;
`;

export default function CharacterCard(props) {
	return (
		<Card>
			<span>
				<h2>{props.getName}</h2>
				<div>{props.getStatus}</div>
			</span>
		</Card>
	);
}
