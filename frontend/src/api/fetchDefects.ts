export async function fetchDefects() {
	const response = await fetch('http://localhost:3000/api/defects');
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
}
