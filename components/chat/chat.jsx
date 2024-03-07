"use client";
import { useRef, useState } from "react";
import ChatHistory from "./chat-history";
import ChatInput from "./chat-input";
import Loading from "../loading";
import ChatDropdown from "./chat-dropdown";

export default function Chat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPhil, setCurrentPhil] = useState(null);

  const userInputRef = useRef("");

  async function initiateChatWith(dropdownLoc) {
    setLoading(true);
    setCurrentPhil(dropdownLoc);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "",
        philosopher: dropdownLoc,
        initialChat: true,
      }),
    });
    const data = await res.json();
    // console.log(data);
    setLoading(false);
    setChatHistory(data);
    userInputRef.current.focus();
  }

  async function inputHandler(inputMsg) {
    console.log("Chat input", inputMsg);
    setLoading(true);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: inputMsg,
        philosopher: currentPhil,
        initialChat: false,
        chatHistory,
      }),
    });
    const data = await res.json();
    // console.log(data);
    setLoading(false);
    setChatHistory(data);
    userInputRef.current.focus();
  }

  return (
    <section className="rounded-md flex flex-col items-center bg-[#023047] w-full h  m-2 p-1">
      <h1 className="text-2xl">Chat</h1>
      {!currentPhil && (
        <p>
          Pick a philosopher from the menu. Debate with the phisopher or have a
          discussion. Have fun!
        </p>
      )}
      <ChatDropdown initiateChatWith={initiateChatWith} />
      <ChatHistory chatHistory={chatHistory.slice(3)} />
      {loading && <Loading />}
      <div className="h-24"></div>

      {currentPhil && <ChatInput onInput={inputHandler} ref={userInputRef} />}
    </section>
  );
}
