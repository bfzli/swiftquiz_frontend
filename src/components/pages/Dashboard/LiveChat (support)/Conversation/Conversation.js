import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Conversation.scss";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState();

  const friendId = conversation.members.find((m) => m !== currentUser.user_id);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5001/api/user/${friendId}`
        );
        await setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <>
      <div className="conversation">
        <img className="conversationImg" src="" alt="o_o" />
        <p className="conversationDesc">{user && user.name}</p>
      </div>
    </>
  );
}
