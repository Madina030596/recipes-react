import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const recipe = action.payload;

      const isExists = state.some(r => r.id === recipe.id);

      if (isExists) {
        // return (state = state.filter(r => r.id !== recipe.id));
        const index = state.findIndex(item => item.id === recipe.id);

        if (index !== -1) {
          state.splice(index, 1);
        }
      } else {
        state.push(recipe);
      }
    }
  }
});

export const { actions, reducer } = favoritesSlice;
