import React from "react";
import SidebarRow from "./SidebarRow";
import "../src/styles/Sidebar.css";
import {
  Home,
  Whatshot,
  VideoLibrary,
  Subscriptions,
  History,
  OndemandVideo,
  WatchLater,
  ThumbUpAltOutlined,
  ExpandMoreOutlined,
} from "@material-ui/icons/";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected title="Home" Icon={Home} />
      <SidebarRow title="Trending" Icon={Whatshot} />
      <SidebarRow title="Subscription" Icon={Subscriptions} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibrary} />
      <SidebarRow title="History" Icon={History} />
      <SidebarRow title="Your videos" Icon={OndemandVideo} />
      <SidebarRow title="Watch later" Icon={WatchLater} />
      <SidebarRow title="Liked videos" Icon={ThumbUpAltOutlined} />
      <SidebarRow title="Show more" Icon={ExpandMoreOutlined} />
      <hr />
    </div>
  );
}

export default Sidebar;
