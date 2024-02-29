import { createSlice } from "@reduxjs/toolkit";
import { getRandomCards } from "../../../utils/getRandomCards";
import toast from "react-hot-toast";

const deckSlice = createSlice({
    name : 'deck',
    initialState : {
        cards : ['cat-card', 'defuse-card', 'shuffle-card', 'exploding-kitten-card'],
        deckDrawn : [],
        defuseCardsOwned : 0,
        gameWon : false,
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
                toast.success("Yayy! Cat Card, Find all to win the game");

                if(state.deckDrawn.length == 0){
                    state.gameWon = true;
                    state.isGameOver = true;
                }
            }

            //Logic for Exploding Kitten Card
            if(actions.payload.name === 'exploding-kitten-card'){
                if(state.defuseCardsOwned >= 1){
                    state.defuseCardsOwned -= 1;
                    state.deckDrawn = state.deckDrawn.filter(card => card.id !== actions.payload.id);
                    toast('Phew! Bomb Defused', {
                        icon: '👏',
                      });

                      if(state.deckDrawn.length == 0){
                        state.gameWon = true;
                        state.isGameOver = true;
                    }  
                }
                else{
                    state.gameWon = false;
                    state.isGameOver = true;
                    state.deckDrawn = [];
                    toast.error("Whoops, you got exploded")
                }
            }

            //Logic for Shuffle Card
            if(actions.payload.name === 'shuffle-card'){
                state.deckDrawn = getRandomCards(state.cards, 5);
                toast.success("Cards Shuffled");
            }

            //Logic for Defuse Card
            if(actions.payload.name === 'defuse-card'){
                state.defuseCardsOwned += 1;
                state.deckDrawn = state.deckDrawn.filter(card => card.id !== actions.payload.id);
                toast('You got a Defuse Card!', {
                    icon: '👏',
                  });
                  if(state.deckDrawn.length == 0){
                    state.gameWon = true;
                    state.isGameOver = true;
                }  
            }
        },

        resetGame : (state) => {
            state.deckDrawn = getRandomCards(state.cards, 5);
            state.defuseCardsOwned = 0;
            state.isGameOver = false;
            state.gameWon = false;
        },

        exitGame : (state) => {
            state.deckDrawn = [];
            state.defuseCardsOwned = 0;
            state.isGameOver = false;
            state.gameWon = false;
        }
    }
})

export const { drawDeck, cardActions, resetGame, exitGame } = deckSlice.actions;
export default deckSlice.reducer;