const headers = {
	'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
	'x-rapidapi-key': '7505d69b34msh4e599e0255c0608p150ca5jsn7817adc1cb01',
}

async function getTopMovies() {
	const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
		method: 'GET',
		headers,
	})

	if (!response.ok) {
		throw new Error('Data not found')
	}

	return response.json()
}

async function getMovieById() {
	const response = await fetch(
		'https://imdb-top-100-movies.p.rapidapi.com/top32',
		{
			method: 'GET',
			headers,
		}
	)

	if (!response.ok) {
		throw new Error('Data not found')
	}

	return response.json()
}

async function getTopSeries() {
	const response = await fetch(
		'https://imdb-top-100-movies.p.rapidapi.com/series/',
		{
			method: 'GET',
			headers,
		}
	)

	if (!response.ok) {
		throw new Error('Data not found')
	}

	return response.json()
}

async function getSeriesById() {
	const response = await fetch(
		'https://imdb-top-100-movies.p.rapidapi.com/series/top1',
		{
			method: 'GET',
			headers,
		}
	)

	if (!response.ok) {
		throw new Error('Data not found')
	}

	return response.json()
}

export { getMovieById, getSeriesById, getTopMovies, getTopSeries }
