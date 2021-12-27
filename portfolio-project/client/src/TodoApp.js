import React, {useState, useRef, useEffect} from "react";
import ToDoList from "./components/ToDoList";
const {v4: uuidv4} = require("uuid");

//                                                                route through proxy server
// getResponse() = async() => {
//   const response = await fetch('/api/hello');
//   const body = await response.json();

//   if (response.status !== 200) throw Error(body.message);

//   return body;
// }

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
	const [todos, setTodos] = useState([]); //default state
	const todoNameRef = useRef();

	//this is for storing changes locally in server instance---
	//this should be replaced with DB storage
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (storedTodos) setTodos(storedTodos);
	}, []); //remember this fn is called on change in dependencies stored in array. [] never changes => this is called once

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);

	//local storage ends here---

	function toggleTodo(id) {
		const newTodos = [...todos];
		const todo = newTodos.find((todo) => todo.id === id);
		todo.complete = !todo.complete;
		setTodos(newTodos);
	}

	function handleOnTodo(e) {
		const name = todoNameRef.current.value;
		if (name === "") return;

		setTodos((prevTodos) => {
			return [...prevTodos, {id: uuidv4(), name, complete: false}];
		});
		// console.log(name);
		todoNameRef.current.value = null;
	}

	function handleClearTodos() {
		const newTodos = todos.filter((todo) => !todo.complete);
		setTodos(newTodos);
	}

	return (
		<>
			<ToDoList todos={todos} toggleTodo={toggleTodo} />
			<input ref={todoNameRef} type="text" />
			<button onClick={handleOnTodo}>Add Todo</button>
			<button onClick={handleClearTodos}>Clear Completed Todos</button>
			<div>{todos.filter((todo) => !todo.complete).length} left to do </div>
		</>
	);
}

export default App;
