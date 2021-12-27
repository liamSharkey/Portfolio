import React from "react";
import Todo from "./Todo";

export default function ToDoList({todos}) {
	return todos.map((todo) => {
		return <Todo key={todo.id} todo={todo} />;
	});
}

//props are accepted within the function instantiation
