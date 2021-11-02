import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const teamSlice = createSlice({
  name: "team",
  initialState: {
    list: localStorage.getItem("myteam")
      ? JSON.parse(localStorage.getItem("myteam"))
      : [],
    status: null,
  },
  reducers: {
    addPokemon: (state, action) => {
      //checking if the state/my team already contains the pokemon
      var doesExist = state.list.some(function (ele) {
        return ele.id === action.payload.id;
      });
      //checking if my team does not contains more than 6 pokemons before adding
      if (state.list.length < 6 && !doesExist) {
        state.list.push({ ...action.payload });
        state.status = "success";
        localStorage.setItem("myteam", JSON.stringify(state.list));
        toast.success(`${action.payload.name} successfully added to my team`, {
          position: "bottom-center",
        });
      } else if (doesExist) {
        toast.error(
          `Unable to add ${action.payload.name}, it's already existing in my team`,
          {
            position: "bottom-center",
          }
        );
      } else if (state.list.length >= 6) {
        toast.error(
          `Unable to add ${action.payload.name} now, my team is already full, try again later`,
          {
            position: "bottom-center",
          }
        );
      }
    },

    removePokemon: (state, action) => {
      //checking if the state/my team contains the pokemon
      var doesExist = state.list.some(function (ele) {
        return ele.id === action.payload.id;
      });
      //checking if my team does not contains more than 6 pokemons before adding
      if (state.list.length > 0 && doesExist) {
        state.list.pop({ ...action.payload });
        state.status = "success";
        localStorage.setItem("myteam", JSON.stringify(state.list));
        toast.success(
          `${action.payload.name} successfully removed from my team`,
          {
            position: "bottom-center",
          }
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPokemon, removePokemon } = teamSlice.actions;
export const getMyTeam = (state) => state.team.list;
export default teamSlice.reducer;
