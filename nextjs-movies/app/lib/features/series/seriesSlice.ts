import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SeriesSlice {
	topSeries: any[]
	seriesById: any | null
}

const initialState: SeriesSlice = {
	topSeries: [],
	seriesById: null,
}

const seriesSlice = createSlice({
	name: 'series',
	initialState,
	reducers: {
		setTopSeries(state, action: PayloadAction<any[]>) {
			state.topSeries = action.payload
		},
		setSeriesById(state, action: PayloadAction<any>) {
			state.seriesById = action.payload
		},
	},
})

export const { setTopSeries, setSeriesById } = seriesSlice.actions

export default seriesSlice.reducer
