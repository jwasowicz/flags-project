import axios from "axios";
import { useEffect, useState } from "react";
import spinner from '../assets/loading.gif';

const FlagContent = () => {
  const [listFlags, setListFlags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://flagcdn.com/en/codes.json");

        if (listFlags.length > 1) return;
        const newData = [...listFlags, response.data];
        setListFlags(newData);
      console.log(listFlags);

      } catch (err) {
        console.error(err);
      }

    };

    fetchData();
  }, [listFlags]);

  return (
    <div className={`countries-container ${listFlags.length > 0 ? '' : 'center'}`}>
      {/* <div className="flag-element">
        <div className="flag">
          <img src="https://flagcdn.com/w160/za.png" alt="" />
        </div>
        <div className="country-name">South Africa</div>
      </div> */}
      {listFlags.length > 0 ? Object.entries(listFlags[0]).map(([code, name], index) => (
        <div key={index} className="country-element">
        <div className="country">
          <img src={`https://flagcdn.com/h120/${code}.png`} alt={name} />
        </div>
        <div className="country-name">{name}</div>
      </div>
      )) : (
        <img className="spinnerRef" src={spinner} alt="loading..." />
      )}
    </div>
  );
};

export default FlagContent;
