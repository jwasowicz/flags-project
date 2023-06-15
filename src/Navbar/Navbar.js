import "./styles.css";
import MenuIcon from "@mui/icons-material/Menu";
import TuneIcon from "@mui/icons-material/Tune";
import logo from "../assets/logo.svg";
import Sidebar from "../Sidebar/Sidebar";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Options from "../Sidebar/Options";
import { Link } from "@mui/material";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleMenuClick = () => {
    if (isOptionsOpen) {
      setIsMenuOpen(true);
      setIsOptionsOpen(false);
    } else {
      setIsMenuOpen((prev) => !prev);
    }
  };

  const handleOptionsClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setIsOptionsOpen(true);
    } else {
      setIsOptionsOpen((prev) => !prev);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div
          onClick={handleMenuClick}
          className={`hamburger ${isMenuOpen ? "open" : "closed"}`}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div onClick={handleOptionsClick} className="options">
          <TuneIcon />
        </div>
      </nav>
      <Sidebar
        isMenuOpen={isMenuOpen}
        isOptionsOpen
        setIsMenuOpen={setIsMenuOpen}
      />
      <Options isOptionsOpen={isOptionsOpen} />
    </>
  );
};

export default Navbar;
