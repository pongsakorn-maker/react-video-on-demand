import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "./styles/Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img className="header_logo" src="/apple.svg" alt="" />
      </div>
      <div className="header_input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header_inputButton" />
      </div>
      <div className="header_icons"> 
        <VideoCallIcon className="header_icon"/>
        <AppsIcon className="header_icon"/>
        <NotificationIcon className="header_icon"/>
        <Avatar
          alt="Pongsakorn Maprakhon"
          src="https://avatars3.githubusercontent.com/u/42669586?s=460&u=6af26dd905c043ea8482a9e8775222bda808fca9&v=4"
        />
      </div>
    </div>
  );
}

export default Header;
