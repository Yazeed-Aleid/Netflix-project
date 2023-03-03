import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);
  return (
    <div className={isScrolled?"navbar Scrolled":"navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
            alt=""
            className="logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular </span>
          <span>My list</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>Kid</span>
          <NotificationsNoneIcon className="icon" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
            className=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
