import { useState } from "react";
import { useNavigate }  from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/deck";
import { Loader2 } from "lucide-react";

const HomePage = () => {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleSubmit = async(evt, username) => {
        evt.preventDefault();
        setLoading(true)
        const response = await fetch(`https://exploding-kittens-backend-xyi0.onrender.com/createUser/${username}`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            }
        });
        const data = await response.json();
        dispatch(setUser(data));
        setLoading(false)
        navigate("/game");
    }

    return (
        <section className="h-[100vh] w-full flex flex-col items-center gap-20 font-serif p-10 bg-gray-200">
            <div className="heading w-full flex flex-col gap-5">
                <h1 className="text-3xl text-center font-medium">Welcome to Exploding Kittens</h1>
                <h4 className="text-2xl">Game Rules :</h4>
                <ul className=" list-disc font-light">
                    <li>If the card drawn from the deck is a <span className="font-semibold">Cat Card 😼</span>, then the card is removed from the deck.</li>
                    <li>If the card is <span className="font-semibold">Exploding Kitten Card 💣</span> then the player loses the game.</li>
                    <li>If the card is a <span className="font-semibold">Defuse Card 🙅‍♂️</span>, then the card is removed from the deck. This card can be used to defuse one bomb that may come in subsequent cards drawn from the deck.</li>
                    <li>If the card is a <span className="font-semibold">Shuffle Card 🔀</span>, then the game is restarted and the deck is filled with 5 cards again.</li>
                </ul>
            </div>

            <form onSubmit={(evt) => {handleSubmit(evt, inputValue)}} action="/" className="flex flex-col gap-5">
                <h2 className="text-2xl font-medium">Enter you username to play the game!</h2>
                <div className="flex flex-col gap-4">
                    <input value={inputValue} onChange={handleChange} className="border-2 border-gray-600 rounded-md p-2 outline-none" type="text" placeholder="username..." />
                    <button onClick={(evt) => {handleSubmit(evt, inputValue)}} className="flex justify-center items-center border-2 border-[#353535] hover:bg-[#353535] text-[#353535] hover:text-white transition-colors p-3 rounded-md font-semibold uppercase">{loading ? <Loader2 className="animate-spin" /> : "Play Game"}</button>
                </div>
            </form>

        </section>
    )
}

export default HomePage;