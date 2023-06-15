import { useCallback, useContext, useRef, useState } from "react";
import FlagCanvas from "./FlagCanvas";
import FlagSelector from "./FlagSelector";
import spinner from "../assets/loading.gif";
import FlagCounter from "./FlagCounter";
import FlagResetButton from "./FlagResetButton";
import useFlagData from "../hooks/useFlagData";
import FlagDistance from "./FlagDistance";
import FlagStats from "./FlagStats";
import ValuesContext from "../context/ValuesContext";

const FlagContainer = () => {
  const [isLoad, setIsLoad] = useState(false);
  const gridContainer = useRef();
  const [randomNumber, setRandomNumber] = useState("");
  const [endScreen, setEndScreen] = useState(false);
  const [flag, setFlag] = useState("");
  const [elements, setElements] = useState([]);
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const [counter, setCounter] = useState(0);
  const [streak, setStreak] = useState(0);
  const [winRate, setWinRate] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [options, setOptions] = useState("");
  const [randomFlag, setRandomFlag] = useState("");
  const {flagCodes, setFlagCodes} = useContext(ValuesContext)
  const [isWin, setIsWin] = useState(false);
  const [id, setId] = useState("");
  const [link, setLink] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [highWinStreak, setHighWinStreak] = useState([]);

  const { isDisplay } = useContext(ValuesContext);

  const getRandomFlag = useCallback(() => {
    if (flagCodes.length) {
      const countries = Object.values(flagCodes[0]);

      const randomCountry =
        countries[Math.floor(Math.random() * countries.length)];

        console.log(randomCountry);

      return randomCountry;
    }
  }, [flagCodes]);

  useFlagData(
    flagCodes,
    link,
    getRandomFlag,
    randomFlag,
    setFlagCodes,
    setRandomFlag,
    setIsLoad,
    setOptions,
    options
  );

  const clearAllBoxes = () => {
    [...gridContainer.current.childNodes].forEach((el, _) => {
      el.getContext("2d").clearRect(0, 0, 304, 202);
    });
  };

  const handleResetButtonClick = () => {
    setEndScreen(false);
    clearAllBoxes();
    setCounter(0);
    setFlagCodes([]);
    setLink("");
    setId("");
    setNumbers([0, 1, 2, 3, 4, 5]);
    setFlag("");
    setRandomNumber("");
    setElements([]);
    setIsWin(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
{/*       <h1
        style={{ color: "green", margin: "5rem 0 0 0", textAlign: "center" }}
      >
        {randomFlag}
      </h1>{" "} */}
      <br />
      {endScreen && (
        <h1 style={{ color: isWin ? "green" : "red", margin: "5rem 0 0 0" }}>
          {isWin ? "Won" : "Lost"}
        </h1>
      )}{" "}
      <br />
      <div
        style={{ gap: endScreen ? "" : "2px", marginTop: isWin ? "0" : "5rem" }}
        ref={gridContainer}
        className="gridContainer"
      >
        {Array(6)
          .fill()
          .map((_, index) => (
            <FlagCanvas
              key={index}
              isLoad={isLoad}
              link={link}
              id={id}
              gridContainer={gridContainer}
              randomNumber={randomNumber}
              clickedFlag={flag}
              randomFlag={randomFlag}
              setEndScreen={setEndScreen}
              numbers={numbers}
              setCounter={setCounter}
              setIsWin={setIsWin}
              setStreak={setStreak}
              setWinRate={setWinRate}
              setRounds={setRounds}
              counter={counter}
              winStreak={streak}
            />
          ))}
      </div>
      {flagCodes.length ? (
        <FlagSelector
          codes={flagCodes}
          setId={setId}
          setLink={setLink}
          setFlag={setFlag}
          randomFlag={randomFlag}
          setRandomNumber={setRandomNumber}
          endScreen={endScreen}
          numbers={numbers}
          setNumbers={setNumbers}
          selectOptions={options}
        />
      ) : (
        <img className="spinner" src={spinner} alt="loading..." />
      )}
      <FlagCounter counter={counter} />
      <FlagDistance
        flag={flag}
        setElements={setElements}
        elements={elements}
        randomFlag={randomFlag}
      />
      {endScreen && (
        <>
          <FlagResetButton handleResetButtonClick={handleResetButtonClick} />
        </>
      )}
      {isDisplay && (
        <FlagStats
          counter={counter}
          streak={streak}
          rounds={rounds}
          endScreen={endScreen}
          isWin={isWin}
          winRate={winRate}
          attempts={attempts}
          setAttempts={setAttempts}
          highWinStreak={highWinStreak}
          setHighWinStreak={setHighWinStreak}
        />
      )}
    </>
  );
};

export default FlagContainer;
