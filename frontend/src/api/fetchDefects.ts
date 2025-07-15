import type { IQueryControls } from "../types/IQueryControls";

export async function fetchDefects(controls: IQueryControls) {
	console.log('fetching defects')

	const response = await fetch('http://localhost:3000/api/defects', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(controls) // omit 'body' for GET requests
	});

	if (!response.ok) {
		const res = await response.json()
		throw new Error(res.message);
	}
	return response.json();
}
