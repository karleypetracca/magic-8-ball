import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

import "./App.css";

const App = () => {
	const [list, setList] = useState([]);

	const addToList = (query) => {
		setList(list.concat(query));
	};

	return (
		<div className="App">
			<header className="App-header">
				<p>Magic 8 Ball</p>
			</header>
			<Form onSubmit={addToList} />
			<List list={list} />
		</div>
	);
};

export default App;
