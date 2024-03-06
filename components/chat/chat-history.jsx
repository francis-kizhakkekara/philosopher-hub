"use client";
import { useEffect, useState } from "react";
import ChatBubble from "./chat-bubble";

export default function ChatHistory({ chatHistory }) {
  //   useEffect(() => {
  //     fetch("/api/chat")
  //       .then((res) => res.json())
  //       .then(console.log);
  //   }, []);
  return (
    <>
      {/* <h1>Chat History</h1> */}
      <section className="flex flex-col gap-3">
        {chatHistory.map((message, index) => (
          <ChatBubble key={index} message={message.text} role={message.role} />
        ))}
      </section>
    </>
  );
}
