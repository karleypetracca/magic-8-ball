import React, { useState } from "react";
import { getAPI } from "../utilities/getAPI";

const Form = () => {
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
		setQuestion("");
		setAnswer(answer);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={handleChange}
					value={question}
					placeholder="Type question here"
				/>
				<button type="submit">Submit</button>
			</form>
			<p>{answer ? "Your question: " + answer.magic.question : ""}</p>
			<p>{answer ? "Magic 8 Ball says: " + answer.magic.answer : ""}</p>
		</div>
	);
};

export default Form;
