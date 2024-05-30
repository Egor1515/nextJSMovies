import {
	getMovieById,
	getSeriesById,
	getTopMovies,
	getTopSeries,
} from './lib/moviesApi'

export default async function MainPage() {
	const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

	const fetchWithDelay = async (fetchFunction: () => Promise<any>) => {
		await delay(2000)
		return fetchFunction()
	}

	const [movies, movieById, seriesById, series] = await Promise.all([
		fetchWithDelay(getTopMovies),
		fetchWithDelay(getMovieById),
		fetchWithDelay(getSeriesById),
		fetchWithDelay(getTopSeries),
	])

	return (
		<div>
			{movies.slice(0, 10).map((item: any) => (
				<div key={item.id}>Genre: {item.genre}</div>
			))}
			<div>Id rank: {movieById.rank}</div>
			<div>ID Series rank: {seriesById.rank}</div>
			{series.slice(0, 10).map((single: any) => (
				<div key={single.id}>Series: {single.title}</div>
			))}
		</div>
	)
}
