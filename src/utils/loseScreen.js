export const loseScreen = (displayAllBoxes, setCounter, setIsWin, setStreak, setRounds) => {
    displayAllBoxes();
    setCounter((prev) => prev + 1);
    setRounds((prev) => prev + 1);
    setStreak(0);
    setIsWin(false);
}