import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./styles.css";

const FlagHeader = () => {
  return (
    <header className="header">
      <div className="logoRef">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <h1 className="reference-name">Flags Reference</h1>
    </header>
  );
};

export default FlagHeader;
