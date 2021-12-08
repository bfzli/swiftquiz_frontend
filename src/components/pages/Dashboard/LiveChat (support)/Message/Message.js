import React from "react";
import "./Message.scss";
import { format } from "timeago.js";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://i.scdn.co/image/ab67616d0000b273111265bb2b857500f5576fbc"
          alt=""
        />
        <p className="messageDesc">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
