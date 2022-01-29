import React, {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CalendarComponent from "./components/CalendarComp";

function App() {
	return (
		<div>
			<p>Hi again!</p>
			<CalendarComponent></CalendarComponent>
		</div>
	);
}

export default App;
