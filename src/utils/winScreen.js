export const winScreen = (displayAllBoxes, setCounter, setIsWin, setStreak, setWinRate, setRounds) => {
    displayAllBoxes();
    setCounter((prev) => prev + 1);
    setIsWin(true);
    setStreak((prev) => prev + 1);
    setWinRate((prev) => prev + 1);
    setRounds((prev) => prev + 1);
}

