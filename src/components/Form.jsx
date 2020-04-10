import React, { useState } from "react";
import getAPI from "../utilities/getAPI";
import magic8Ball from "../magic8Ball.png";

import styled from "styled-components";

const StyledForm = styled.div`
	border-radius: 4px;
	background-color: rgb(30, 34, 41);
	color: white;
	max-width: 500px;
	margin: 10px auto;
	padding: 20px;

	h2,
	form {
		padding: 10px;
		margin: 0 auto;
	}

	p {
		padding: 0 10px;
		margin: 10px auto;
	}

	em {
		color: rgb(170, 170, 170);
	}

	input {
		font-size: 1rem;
		min-width: 50%;
	}

	img {
		margin-left: 10px;
		max-width: 30px;
	}

	button {
		margin: 0 10px;
		padding: 5px;
		border-style: none;
		border-radius: 4px;
		color: white;
		font-weight: bold;
		font-size: 1rem;
		background: linear-gradient(0.4turn, rgb(75, 128, 82), rgb(26, 84, 99));
		transition: background 1s ease-in;
	}

	button:hover {
		background: linear-gradient(0.8turn, rgb(55, 108, 62), rgb(6, 64, 79));
		cursor: pointer;
		transition: background 1s ease-in;
	}

	.answer {
		display: flex;
		align-items: center;
		margin: 10px auto;
	}

	.answer p {
		margin: 10px 0;
	}
`;

const Form = (props) => {
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState(false);

	const handleChange = (event) => {
		setQuestion(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		let params = encodeURIComponent(question);
		let uri = "https://8ball.delegator.com/magic/JSON/" + params;
		const answer = await getAPI(uri);
		setAnswer(answer);
		props.onSubmit({ question: question, answer: answer.magic.answer });
		setQuestion("");
	};

	return (
		<StyledForm>
			<h2>How will the magic 8 ball respond?</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={handleChange}
					value={question}
					placeholder="Type question here"
				/>
				<button type="submit">Submit</button>
			</form>
			<p>
				<em>{answer ? answer.magic.question : ""}</em>
			</p>
			{answer ? (
				<div className="answer">
					<img src={magic8Ball} />
					<p>{answer.magic.answer}</p>
				</div>
			) : (
				""
			)}
		</StyledForm>
	);
};

export default Form;
