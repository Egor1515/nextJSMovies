import {
	getMovieById,
	getSeriesById,
	getTopMovies,
	getTopSeries,
} from './lib/moviesApi/index'

export default async function Page() {
	const movies = await getTopMovies()
	const movieById = await getMovieById()
	const seriesById = await getSeriesById()
	const series = await getTopSeries()

	return (
		<div>
			{movies.slice(0, 10).map((item: any) => (
				<div key={item.id}>{item.genre}</div>
			))}
			<div>{movieById.rank}</div>
			<div>{seriesById.rank}</div>
			{series.slice(0, 10).map((single: any) => (
					<div key={single.id}>{single.title}</div>
			))}
		</div>
	)
}
