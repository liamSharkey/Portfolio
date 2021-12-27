import React from "react";
import Todo from "./Todo";

export default function ToDoList({todos, toggleTodo}) {
	return todos.map((todo) => {
		return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
	});
}

//props are accepted within the function instantiation
