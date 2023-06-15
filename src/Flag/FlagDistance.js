import { useEffect} from "react";
import { calculateDistance } from "../utils/distanceUtils";

import Geocode from "react-geocode";

const FlagDistance = ({ flag, setElements, elements, randomFlag }) => {

  Geocode.setApiKey(process.env.REACT_APP_API_KEY);



  useEffect(() => {
    if (flag && randomFlag) {
      const parseToGeoCode = async () => {
        try {
          const clickedFlagRes = await Geocode.fromAddress(flag);
          const randomFlagRes = await Geocode.fromAddress(randomFlag);

          const newFlagLocation = {
            lat: clickedFlagRes.results[0].geometry.location.lat,
            lng: clickedFlagRes.results[0].geometry.location.lng,
          };

          const newRandomFlagLocation = {
            lat: randomFlagRes.results[0].geometry.location.lat,
            lng: randomFlagRes.results[0].geometry.location.lng,
          };

          setElements(prevElements => [
            ...prevElements,
            [
              flag,
              calculateDistance(
                newFlagLocation["lat"],
                newFlagLocation["lng"],
                newRandomFlagLocation["lat"],
                newRandomFlagLocation["lng"]
              ),
            ],
          ]);

        } catch (err) {
          console.log(err);
        }
      };

      parseToGeoCode();
    }
  }, [setElements, flag, randomFlag]);

  return (
    <ul className="flag-list">

      {elements.length > 0 &&
        elements.map(([flagName, distance], index) => (
          <li key={index} className="flag-element">
            <div className="flag-name">{flagName}</div>
            <div className="flag-distance">
              {distance} km
            </div>
          </li>
        ))}
    </ul>
  );
};

export default FlagDistance;
