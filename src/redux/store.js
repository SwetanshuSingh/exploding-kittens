import { configureStore } from "@reduxjs/toolkit";
import deckSlice from "./slices/deck"
export const store = configureStore({
  reducer: {
    deck : deckSlice
  },
});
