import { createSlice } from "@reduxjs/toolkit";
import { getRandomCards } from "../../../utils/getRandomCards";

const deckSlice = createSlice({
    name : 'deck',
    initialState : {
        cards : ['cat-card', 'defuse-card', 'shuffle-card', 'exploding-kitten-card'],
        deckDrawn : [],
        defuseCardsOwned : 0,
        isGameOver : false
    },
    reducers : {
        drawDeck : (state) => {
            state.deckDrawn = getRandomCards(state.cards, 5);
            state.defuseCardsOwned = 0;
        },

        cardActions : (state, actions) => {
            //Logic for Cat Card
            if(actions.payload.name === 'cat-card'){
                state.deckDrawn = state.deckDrawn.filter(card => card.id !== actions.payload.id);
            }

            //Logic for Exploding Kitten Card
            if(actions.payload.name === 'exploding-kitten-card'){
                if(state.defuseCardsOwned > 1){
                    state.defuseCardsOwned -= 1;
                    state.deckDrawn = state.deckDrawn.filter(card => card.id !== actions.payload.id);
                }
                else{
                    alert("You lost the game");
                    state.deckDrawn = [];
                }
            }

            //Logic for Shuffle Card
            if(actions.payload.name === 'shuffle-card'){
                state.deckDrawn = getRandomCards(state.cards, 5);
            }

            //Logic for Defuse Card
            if(actions.payload.name === 'defuse-card'){
                state.defuseCardsOwned += 1;
                state.deckDrawn = state.deckDrawn.filter(card => card.id !== actions.payload.id);
            }

            // Write logic after winning game

        }
    }
})

export const { drawDeck, cardActions, defuseCardsOwned } = deckSlice.actions;
export default deckSlice.reducer;