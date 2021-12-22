import React from "react";
import "./Message.scss";
import { format } from "timeago.js";
import { useSelector } from "react-redux";
import hisAvatar from "../../../../../assets/images/chat/Avatar 2.png";
import ownAvatar from "../../../../../assets/images/chat/Avatar 5.png";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={own === true ? hisAvatar : hisAvatar}
          alt=""
        />
        <p className="messageDesc">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
