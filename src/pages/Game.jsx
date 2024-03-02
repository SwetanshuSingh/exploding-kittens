import { useSelector, useDispatch } from "react-redux";
import { cardActions, drawDeck, exitGame } from "../redux/slices/deck";
import GameResult from "../components/GameResult";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Game = () => {

  const deck = useSelector((state) => state.deck.deckDrawn)
  const defuseCardsOwned = useSelector((state) => state.deck.defuseCardsOwned);
  const isGameOver = useSelector((state) => state.deck.isGameOver);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [players, setPlayers] = useState('');

  useEffect(() => {
    const getLeaderBoard = async() => {
      const response = await fetch("https://exploding-kittens-backend-xyi0.onrender.com/leaderboard");
      const data = await response.json();
      setPlayers(data);
    }
      getLeaderBoard();
  }, [isGameOver])

  const handleExit = () => {
    dispatch(exitGame());
    navigate("/");
}

  return (
    <main className="h-[100vh] w-full flex">
      <div className="w-[20%] h-full font-serif p-4 flex flex-col items-center">
        <h2 className="text-2xl underline uppercase">Leaderboard</h2>

        <div>
          {players &&
            players
              .slice() // Create a shallow copy of the array to avoid mutating the original array
              .sort((a, b) => b.score - a.score) // Sort the array based on the score in descending order
              .map((player) => {
                return (
                  <div key={player.username}>
                    <p>
                      {player.username} : {player.score}
                    </p>
                  </div>
                );
              })}
        </div>

        {/* <div>
          {players && players.map((player) => {
            return (
              <div key={player.username}>
                <p>{player.username} : {player.score}</p>
              </div>
            )
          })}
        </div> */}
      </div>

      <div className="w-[80%] h-full flex flex-col gap-8 items-center justify-center font-serif">
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
    </main>
  )
}

export default Game;