import { IFavoriteMovie } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  movies: IFavoriteMovie[] | null | undefined;
}

const initialState: IInitialState = {
  movies: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addFavoriteMovie: (state, action: PayloadAction<IFavoriteMovie>) => {
      if (Array.isArray(state.movies)) {
        state.movies.push(action.payload);
      } else {
        state.movies = [action.payload];
      }
    },
    removeFavoriteMovie: (state, action: PayloadAction<IFavoriteMovie>) => {
      if (Array.isArray(state.movies)) {
        state.movies = state.movies.filter(
          (movie) => movie.id !== action.payload.id
        );
      }
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie } = movieSlice.actions;
export default movieSlice.reducer;
