import { Switch } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ValuesContext from "../context/ValuesContext";
import { europeanCountries } from "../utils/europeCountries";

const Options = ({isOptionsOpen}) => {
  const [statsChecked, setStatsChecked] = useState(true);

  const [sortChecked, setSortChecked] = useState(false);

  const {setIsDisplay} = useContext(ValuesContext)

  const {flagCodes, setFlagCodes} = useContext(ValuesContext)

  const handleStatsChange = (e) => {
    setStatsChecked(e.target.checked);

    setIsDisplay(e.target.checked);

  };

  const handleSortChange = (e) => {
    setSortChecked(e.target.checked);
  }

  useEffect(() => {
    if(sortChecked) {

      const obj = {}
      const matchCountries = europeanCountries.filter(country => {
        return Object.values(flagCodes[0]).includes(country);

      })

      const countriesWithKeys = Object.entries(flagCodes[0]).filter(([_, name]) => matchCountries.includes(name));

      countriesWithKeys.map(([key, value]) => {
        return obj[key] = value;
      })

      setFlagCodes([]);
      setFlagCodes(prev => [...prev, obj]);
      
      

      
    }
  }, [sortChecked])




  return (
    <div className={`options-container ${isOptionsOpen ? 'open' : ''}`}>
      <ul className="options-list">
        <li className="option">
          <div className="option-name">Dark Mode</div>
          <Switch defaultChecked />
        </li>
        <li className="option">
          <div className="option-name">Show Statistics</div>
          <Switch checked={statsChecked} onChange={handleStatsChange}  />
        </li>
        <li className="option">
          <div className="option-name">Sort countries by Europe:</div>
          <Switch checked={sortChecked} onChange={handleSortChange}/>
        </li>
      </ul>
    </div>
  );
};

export default Options;
