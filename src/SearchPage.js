import React from "react";
import "./styles/SearchPage.css";
import { TuneOutlined } from "@material-ui/icons";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        channelImage="https://avatars3.githubusercontent.com/u/42669586?s=460&u=6af26dd905c043ea8482a9e8775222bda808fca9&v=4"
        channel="Pongsakorn Maprakhon"
        verified
        subs="999K"
        noOfVideos={99}
        description="ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here"
      />
      <hr />

      <VideoRow
        views="1.4M"
        subs="999K"
        description="ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here"
        timestamp="3 days ago"
        channel="Pongsakorn Maprakhon"
        title="Best Memes 2020"
        videoImage="https://ichef.bbci.co.uk/images/ic/704xn/p072ms6r.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="999K"
        description="ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here"
        timestamp="3 days ago"
        channel="Pongsakorn Maprakhon"
        title="Best Memes 2020"
        videoImage="https://ichef.bbci.co.uk/images/ic/704xn/p072ms6r.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="999K"
        description="ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here"
        timestamp="3 days ago"
        channel="Pongsakorn Maprakhon"
        title="Best Memes 2020"
        videoImage="https://ichef.bbci.co.uk/images/ic/704xn/p072ms6r.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="999K"
        description="ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here ez coding here"
        timestamp="3 days ago"
        channel="Pongsakorn Maprakhon"
        title="Best Memes 2020"
        videoImage="https://ichef.bbci.co.uk/images/ic/704xn/p072ms6r.jpg"
      />
    </div>
  );
}

export default SearchPage;
