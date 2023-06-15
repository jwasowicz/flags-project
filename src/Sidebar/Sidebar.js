import "./styles.css";
import ExtensionIcon from "@mui/icons-material/Extension";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Link } from "react-router-dom";

const Sidebar = ({ isMenuOpen }) => {
  return (
    <div className={`sidebar-container ${isMenuOpen ? "open" : ""}`}>
      <ul className="elements-list">
        <Link to="/flagreference">
          <li className="element">
            <div className="name">Flag Practice</div>
            <ExtensionIcon className="icon" />
          </li>
        </Link>
        <li className="element">
          <div className="name">Support</div>
          <VolunteerActivismIcon className="icon" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
