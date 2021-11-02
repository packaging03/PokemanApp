import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { randomSearch } from "../services/pokemonService";

export const randomPokemonSearch = createAsyncThunk(
  "pokemon/randomPokemonSearch",
  async (id: any, thunkAPI) => {
    let smallcase = id.toLowerCase();
    const res = await randomSearch(smallcase);
    return res.data;
  }
);

export const searchSlice = createSlice({
  name: "pokemon",
  initialState: {
    list: {},
    status: null,
  },
  extraReducers: {
    [randomPokemonSearch.pending]: (state, action) => {
      state.status = "loading";
    },
    [randomPokemonSearch.fulfilled]: (state, action) => {
      state.list = { ...action.payload };
      state.status = "success";
    },
    [randomPokemonSearch.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const getSearchResult = (state) => state.search.list;
export const getSearchStatus = (state) => state.search.status;
export default searchSlice.reducer;
