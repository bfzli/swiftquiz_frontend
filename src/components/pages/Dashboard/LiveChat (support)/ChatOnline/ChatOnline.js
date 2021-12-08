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
            src="https://i.scdn.co/image/ab67616d0000b273111265bb2b857500f5576fbc"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Ismet Peja</span>
      </div>
    </div>
  );
}
