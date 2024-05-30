import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MovieState {
	topMovies: any[],
	movieById: any | null
}

const initialState: MovieState = {
	topMovies: [],
	movieById: null
}

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers:{
		setTopMovies(state, action: PayloadAction<any[]>){
			state.topMovies = action.payload
		},
		setMovieById(state, action: PayloadAction<any>){
			state.movieById = action.payload
		}
	}
})

export const {setTopMovies, setMovieById} = movieSlice.actions

export default movieSlice.reducer