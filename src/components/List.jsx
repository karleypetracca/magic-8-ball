import React from "react";
import magic8Ball from "../magic8Ball.png";

import styled from "styled-components";

const StyledList = styled.div`
	border-radius: 4px;
	background-color: rgb(30, 34, 41);
	color: white;
	max-width: 500px;
	margin: 10px auto;
	padding: 20px;

	h2 {
		padding: 10px;
	}

	p {
		padding: 0 10px;
	}

	em {
		color: rgb(170, 170, 170);
	}

	img {
		margin-left: 10px;
		max-width: 30px;
	}

	.answer {
		display: flex;
		align-items: center;
		margin: 10px auto;
	}
`;

const List = (props) => {
	console.log(props.list);
	const renderList = props.list.reverse().map((query, index) => {
		return (
			<div key={index}>
				<p>
					<em>{query.question}</em>
				</p>
				<div className="answer">
					<img src={magic8Ball} /> <p>{query.answer}</p>
				</div>
			</div>
		);
	});
	return (
		<>
			{props.list.length > 0 ? (
				<StyledList>
					<h2>Prior questions:</h2> {renderList}
				</StyledList>
			) : (
				""
			)}
		</>
	);
};

export default List;
