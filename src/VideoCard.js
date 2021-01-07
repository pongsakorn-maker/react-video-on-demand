import { Avatar } from "@material-ui/core";
import React from "react";
import "./styles/VideoCard.css";
function VideoCard({
  chanelImage,
  videoImage,
  views,
  title,
  chanel,
  timestamp,
}) {
  return (
    <div className="videoCard">
      <img className="videoCard_thumbnail" src={videoImage} alt="" />
      <div className="videoCard_info">
        <Avatar className="videoCard_avatar" alt={chanel} src={chanelImage} />
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{chanel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
