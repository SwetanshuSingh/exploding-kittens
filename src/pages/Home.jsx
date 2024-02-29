import { useState } from "react";
import { useNavigate }  from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');

    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(inputValue);
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

            <form onSubmit={handleSubmit} action="/" className="flex flex-col gap-5">
                <h2 className="text-2xl font-medium">Enter you username to play the game!</h2>
                <div className="flex flex-col gap-4">
                    <input value={inputValue} onChange={handleChange} className="border-2 border-gray-600 rounded-md p-2 outline-none" type="text" placeholder="username..." />
                    <button onClick={handleSubmit} className="border-2 border-[#353535] hover:bg-[#353535] text-[#353535] hover:text-white transition-colors p-3 rounded-md font-semibold uppercase">Play game</button>
                </div>
            </form>

        </section>
    )
}

export default HomePage;