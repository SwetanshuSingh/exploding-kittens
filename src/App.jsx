import { useSelector, useDispatch } from "react-redux";
import { cardActions, drawDeck } from "./redux/slices/deck";

const App = () => {

  // const count = useSelector((state) => state.counter);
  const deck = useSelector((state) => state.deck.deckDrawn)
  const dispatch = useDispatch();

  return (
    <div className="w-full h-[100vh] flex flex-col gap-8 items-center justify-center">
      <div className="cards flex gap-4">
        {deck.map((card) => {
          return (
            <div onClick={() => {dispatch(cardActions({ name : card.cardName, id : card.id}))}} key={card.id} className="w-16 h-24 border border-black rounded-lg bg-red-500">
            </div>
          )
        })}
      </div>
      
      <button className="bg-black text-white rounded-lg px-3 py-2" onClick={() => {dispatch(drawDeck())}}>Start Game</button>
    </div>
  )
}

export default App;