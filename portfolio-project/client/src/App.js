import React, {useState, useRef} from "react";
import ToDoList from "./components/ToDoList";
const {v4: uuidv4} = require("uuid");

//                                                                route through proxy server
// getResponse() = async() => {
//   const response = await fetch('/api/hello');
//   const body = await response.json();

//   if (response.status !== 200) throw Error(body.message);

//   return body;
// }

function App() {
	const [todos, setTodos] = useState([]); //default state
	const todoNameRef = useRef();

	function handleOnTodo(e) {
		const name = todoNameRef.current.value;
		if (name === "") return;

		setTodos((prevTodos) => {
			return [...prevTodos, {id: uuidv4(), name, complete: false}];
		});
		// console.log(name);
		todoNameRef.current.value = null;
	}

	return (
		<>
			<ToDoList todos={todos} />
			<input ref={todoNameRef} type="text" />
			<button onClick={handleOnTodo}>Add Todo</button>
			<button>Clear Completed Todos</button>
			<div> 0 left to do </div>
		</>
	);
}

export default App;
