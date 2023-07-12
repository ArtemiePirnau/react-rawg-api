import { createSlice } from "@reduxjs/toolkit";
const gamesSlice = createSlice({
    name: "games",
    initialState: {
        gamesList: []
    },
    reducers: {
        setAllGames: (state, action) => {
            state.gamesList = action.payload;
        }
    }
})
export default gamesSlice.reducer;
export const { setAllGames } = gamesSlice.actions
