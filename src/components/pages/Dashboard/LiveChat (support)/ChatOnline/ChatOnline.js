import React from "react";
import "./ChatOnline.scss";

export default function ChatOnline({
  onlineUsers,
  currentUserId,
  setCurrentChat,
}) {
  return (
    <div className="ChatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImageContainer">
          <img
            src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Default User</span>
      </div>
    </div>
  );
}
