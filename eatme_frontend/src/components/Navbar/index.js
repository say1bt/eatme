import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import styles from "../../styles/styles.scss";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button";

const Navbar = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  return (
    <div className="navbar z-50">
      <Link className="logo">
        <img src="/logo.svg" alt="Logo" />
      </Link>

      {!isLoginPage && (
        <div className="search-bar">
          <SearchOutlinedIcon className="search-icon" />
          <input type="text" placeholder="Search Tossed - St Martin's Lane" />
        </div>
      )}

      <div className="buttons">
        <div className="chart-btn">
          <Button icon={<ShoppingCartOutlinedIcon />} label="Cart" value={0} />
        </div>

        <button className="signup-btn">
          <HomeOutlinedIcon />
          <span>Sign up or log in</span>
        </button>

        <button className="account-btn">
          <PersonOutlineIcon />
          <span>Account</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
