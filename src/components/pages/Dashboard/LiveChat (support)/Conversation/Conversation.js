import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Conversation.scss";
import hisAvatar from "../../../../../assets/images/chat/Avatar 2.png";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState();

  const friendId = conversation.members.find((m) => m !== currentUser.user_id);
  const getUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:1234/api/user/getUser/${friendId}`
      );
      const data = await res.data;
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, [currentUser, conversation, friendId]);

  console.log(user);
  return (
    <>
      <div className="conversation">
        <img className="conversationImg" src={hisAvatar} alt="" />
        <p className="conversationDesc">{user && user.name}</p>
      </div>
    </>
  );
}
