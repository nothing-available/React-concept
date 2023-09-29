import './App.css'
import { useState } from 'react';

function App() {

	const [counter, setCounter] = useState(0);

	const addvalue = () => {

		if (counter < 20) {
			//Updating state based on the previous state value
			setCounter(prevCounter => prevCounter + 1); 
			setCounter(prevCounter => prevCounter + 1);
			setCounter(prevCounter => prevCounter + 1);

		}
	}

	const removeValue = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	}

	return (
		<>
			<h1>Hiii</h1>
			<h2> Counter value : {counter}</h2>

			<button onClick={addvalue}> Add Value </button>

			<br />

			<button onClick={removeValue}> Remove Value </button>
		</>
	)
}

export default App
