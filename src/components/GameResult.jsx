import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { exitGame, resetGame } from "../redux/slices/deck";


const GameResult = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const gameWon = useSelector((state) => {state.deck.gameWon});

    const handleExit = () => {
        dispatch(exitGame());
        navigate("/");
    }

    const handleReset = () => {
        dispatch(resetGame());
    }

    return (
        <div className="w-80 h-52 border-black border bg-[#353535] text-white font-medium rounded-md shadow-md absolute flex flex-col justify-around items-center z-10">
            <h2 className="text-2xl">{gameWon ? "You Won !" : "You Lost !"}</h2>

            <div className="flex gap-6">
                <button onClick={handleReset} className="bg-black p-2 rounded-lg">Try again</button>
                <button onClick={handleExit} className="bg-black p-2 rounded-lg">Exit Game</button>
            </div>
        </div>
    )
}

export default GameResult;