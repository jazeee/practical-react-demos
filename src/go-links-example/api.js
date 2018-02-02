export const ENDPOINT = "http://localhost:42666/api/v1/go-links";

export const getGoLinks = () => {
	return fetch(`${ENDPOINT}`)
		.then(response => response.json())
		.then(({links}) => links);
};

export const postGoLink = (newLink) => {
	return fetch(`${ENDPOINT}`,
		{
			method: "POST",
			headers: {"content-type": "application/json"},
			body: JSON.stringify(newLink),
		},
	);
};

export const deleteGoLink = (name) => {
	return fetch(`${ENDPOINT}/${name}`,
		{
			method: "DELETE",
		},
	);
};
