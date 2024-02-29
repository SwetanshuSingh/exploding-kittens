import { useSelector, useDispatch } from "react-redux";
import { cardActions, drawDeck, exitGame } from "../redux/slices/deck";
import GameResult from "../components/GameResult";
import { useNavigate } from "react-router-dom";

const Game = () => {

  const deck = useSelector((state) => state.deck.deckDrawn)
  const defuseCardsOwned = useSelector((state) => state.deck.defuseCardsOwned);
  const isGameOver = useSelector((state) => state.deck.isGameOver);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleExit = () => {
    dispatch(exitGame());
    navigate("/");
}

  return (
    <div className="w-full h-[100vh] flex flex-col gap-8 items-center justify-center font-serif">
      <h2 className="text-xl font-medium">Defuse Card owned : {defuseCardsOwned}</h2>
      <div className="cards flex gap-4">
        {deck.map((card) => {
          return (
            <div onClick={() => {dispatch(cardActions({ name : card.cardName, id : card.id}))}} key={card.id} className="w-16 h-24 border border-black rounded-lg bg-red-500">
            </div>
          )
        })}
      </div>
      
      <div className="flex gap-5">
        {deck.length === 0 ? <button className="bg-black text-white rounded-lg px-3 py-2" onClick={() => {dispatch(drawDeck())}}>Start Game</button> : null}
        <button className="bg-black text-white rounded-lg px-3 py-2" onClick={handleExit}>Exit Game</button>
      </div>


      {isGameOver ? <GameResult /> : null}
    </div>
  )
}

export default Game;