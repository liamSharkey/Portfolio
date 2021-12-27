import React from "react";

export default function Pagination({goToNextPage, goToPrevPage}) {
	return (
		<div>
			{/* little tricky if statement by using the && after the function */}
			{goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
			{goToNextPage && <button onClick={goToNextPage}>Next</button>}
		</div>
	);
}
