import { useEffect } from "react";
import axios from "axios";

const useFlagData = (flagCodes, link, getRandomFlag, randomFlag, setFlagCodes, setRandomFlag, setIsLoad, setOptions, options) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://flagcdn.com/en/codes.json");
        if (flagCodes.length > 1) return;
        const newData = [...flagCodes, response.data];
        setFlagCodes(newData);
        const newArr = [];
        Object.values(newData[0]).forEach(item => newArr.push({label: item}));
        setRandomFlag(getRandomFlag());
        setOptions(newArr)
        window.scrollTo(0,0)
      } catch (err) {
        console.error(err);
      }
    };

    const img = new Image();
    img.src = link;
    img.onload = () => {
      setIsLoad(true);
    };

    fetchData();
  }, [flagCodes, link, getRandomFlag, randomFlag, setFlagCodes, setRandomFlag, setIsLoad, options, setOptions]);
};

export default useFlagData;
