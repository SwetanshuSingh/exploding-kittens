import { createSlice } from "@reduxjs/toolkit";
import { getRandomCards } from "../../../utils/getRandomCards";


const deckSlice = createSlice({
    name : 'deck',
    initialState : {
        cards : ['cat-card', 'defuse-card', 'shuffle-card', 'exploding-kitten-card'],
        deckDrawn : [],
        isGameOver : false
    },
    reducers : {
        drawDeck : (state) => {
            state.deckDrawn = getRandomCards(state.cards, 5);
        },

        cardActions : (state, actions) => {
            console.log(actions.payload);
            if(actions.payload.name === 'cat-card'){
                state.deckDrawn = state.deckDrawn.filter(card => card.id !== actions.payload.id);
            }
        }
    }
})

export const { drawDeck, cardActions } = deckSlice.actions;
export default deckSlice.reducer;