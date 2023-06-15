import { useEffect } from "react";
import { winScreen } from "../utils/winScreen";
import { loseScreen } from "../utils/loseScreen";

const FlagCanvas = ({
  isLoad,
  link,
  id,
  gridContainer,
  randomNumber,
  clickedFlag,
  randomFlag,
  setEndScreen,
  numbers,
  setCounter,
  setIsWin,
  setStreak,
  setWinRate,
  setRounds,
}) => {
  useEffect(() => {
    if (!isLoad || id === "") {
      return;
    }

    const img = new Image();
    img.src = link;
    img.onload = () => {
      const coord = {
        1: [0, 0],
        2: [img.width / 3, 0],
        3: [(img.width / 3) * 2, 0],
        4: [0, img.height / 2],
        5: [img.width / 3, img.height / 2],
        6: [(img.width / 3) * 2, img.height / 2],
      };

      const displayAllBoxes = () => {
        setEndScreen(true);

        return [...gridContainer.current.childNodes].forEach((el, i) => {
          return el
            .getContext("2d")
            .drawImage(
              img,
              coord[i + 1][0],
              coord[i + 1][1],
              img.width / 3,
              160,
              0,
              0,
              304,
              202
            );
        });
      };

      if (gridContainer.current && numbers.length) {
        const ctx = [...gridContainer.current.childNodes][
          randomNumber
        ].getContext("2d");

        if (clickedFlag === randomFlag) {
          winScreen(
            displayAllBoxes,
            setCounter,
            setIsWin,
            setStreak,
            setWinRate,
            setRounds
          );
        } else {
          ctx.canvas.classList.add("flipped");

          if (isNaN(ctx)) {
            setTimeout(() => {
              ctx.drawImage(
                img,
                coord[randomNumber + 1][0],
                coord[randomNumber + 1][1],
                img.width / 3,
                160,
                0,
                0,
                304,
                202
              );

              ctx.canvas.classList.remove("flipped");
            }, 250);

            setCounter((prev) => prev + 1);
          }
        }
      } else {
        if (clickedFlag === randomFlag) {
          winScreen(
            displayAllBoxes,
            setCounter,
            setIsWin,
            setStreak,
            setWinRate,
            setRounds
          );
        } else {
          loseScreen(
            displayAllBoxes,
            setCounter,
            setIsWin,
            setStreak,
            setRounds
          );
        }
      }
    };
  }, [
    isLoad,
    id,
    link,
    gridContainer,
    randomNumber,
    clickedFlag,
    randomFlag,
    setEndScreen,
    numbers,
    setCounter,
    setIsWin,
    setRounds,
    setStreak,
    setWinRate,
  ]);

  return <canvas className="box"></canvas>;
};

export default FlagCanvas;
