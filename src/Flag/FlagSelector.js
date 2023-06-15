import React, { useState } from "react";
import Select from 'react-select';
import { customStyles } from "./styles";

const FlagSelector = ({
  codes,
  setId,
  setLink,
  setFlag,
  randomFlag,
  setRandomNumber,
  endScreen,
  numbers,
  setNumbers,
  selectOptions
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = selectOptions;

  const getRandomNumber = () => {
    if (!numbers.length) return undefined;

    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const newArr = numbers.filter((el) => el !== randomNumber);
    setNumbers(newArr);
    return randomNumber;
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);

    const id = Object.keys(codes[0]).find(
      (key) => codes[0][key] === randomFlag
    );
    const clickedID = Object.keys(codes[0]).find(
      (key) => codes[0][key] === selectedOption.label
    );
    window.scrollTo(0,0)


    setRandomNumber(getRandomNumber());
    setFlag(codes[0][`${clickedID}`]);
    setId(id);
    setLink(`https://flagcdn.com/h240/${id}.png`);
  };

  return (
    <div className="selectContainer">

      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Guess the Flag!"
        styles={customStyles(endScreen)}
      />
    </div>
  );
};

export default FlagSelector;
