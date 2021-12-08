import React, { useEffect, useRef, useState } from "react";
import "./Messenger.scss";
import Conversation from "./Conversation/Conversation";
import Message from "./Message/Message";
import ChatOnline from "./ChatOnline/ChatOnline";
import sendMessage from "../../../../assets/images/messenger/whiteSendButton.webp";
import sendSound from "../../../../assets/voices/imessage_send.mp3";
import { useSelector } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";

export default function Messenger() {
  const user = useSelector((state) => state.auth.auth);
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const socket = useRef();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const scrollToBottom = useRef();
  const soundEffect = new Audio(sendSound);

  //call socket server
  useEffect(() => {
    socket.current = io("ws://https://swiftapi.vercel.app:8900");
    //get message
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  //update message when arrivalMessage is changed
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  //emit to send something to server and on to receive something from server
  useEffect(() => {
    socket.current.emit("sendUser", user.user_id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  //fetch conversations
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          "https://swiftapi.vercel.app/api/user/getConversations/" + user.user_id
        );
        setConversation(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user.user_id]);

  //fetch messages
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          "https://swiftapi.vercel.app/api/user/getMessages/" + currentChat._id
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  console.log(conversation);

  //handle submit (for input that contains the message)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      conversationId: currentChat._id,
      sender: user.user_id,
      text: newMessage,
    };

    //find receiver id by comparing it with the current user
    const receiverId = currentChat.members.find(
      (member) => member !== user.user_id
    );

    //send message
    socket.current.emit("sendMessage", {
      senderId: user.user_id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post(
        "http://localhost:5001/api/user/messages",
        message
      );
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
    {
      newMessage && soundEffect.play();
    }
  };

  //scroll automatically at the bottom of the div when a mew message is send or received
  useEffect(() => {
    scrollToBottom.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  //soundEffect

  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input
            type="text"
            placeholder="Search for admins..."
            className="chatMenuInput"
          />
          {conversation.map((C) => (
            <div onClick={() => setCurrentChat(C)}>
              <Conversation conversation={C} currentUser={user} />
            </div>
          ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop">
                {messages.map((m) => (
                  <div ref={scrollToBottom}>
                    <Message message={m} own={m.sender === user.user_id} />
                  </div>
                ))}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatBoxInput"
                  placeholder="Type a message..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <img
                  src={sendMessage}
                  alt=""
                  onClick={newMessage && handleSubmit}
                  className="sendMessage"
                />
              </div>
            </>
          ) : (
            <span className="noConversationText">
              Oops, nothing to display, open a conversation to start chatting
              o_o
            </span>
          )}
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline
            onlineUsers={onlineUsers}
            currentUserId={user.user_id}
            setCurrentChat={setCurrentChat}
          />
        </div>
      </div>
    </div>
  );
}
