const getLeaderBoard = async() => {
    const response = await fetch("http://localhost:8080/leaderboard");
    const data = await response.json();
    console.log(data);
}

export default getLeaderBoard;