"use client";

import { forwardRef, useEffect } from "react";

const ChatInput = forwardRef(function ChatInput({ onInput }, ref) {
  function inputHandler(e) {
    e.preventDefault();
    const inputValue = ref.current.value;

    console.log(inputValue);
    onInput(inputValue);
    ref.current.value = "";
  }

  useEffect(() => {
    window.addEventListener(
      "keydown",
      (e) => {
        if (e.ctrlKey && e.code === "KeyK") {
          e.preventDefault();
          if (ref && ref.current) ref.current.focus();
        }
      },
      []
    );

    // window.addEventListener(
    //   "keydown",
    //   (event) => {
    //     const p = document.createElement("p");
    //     p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    //     document.getElementById("output").appendChild(p);
    //     window.scrollTo(0, document.body.scrollHeight);
    //   },
    //   true
    // );
  });

  return (
    <section className="w-full flex flex-row justify-center fixed bottom-0 bg-black/60 p-3 rounded">
      <form className="w-5/6 flex flex-row justify-center" action="">
        <input
          className="rounded bg-gray-700 w-5/6 p-2"
          type="text"
          name=""
          id=""
          placeholder="Input | Ctrl K"
          ref={ref}
        />
        <button
          className="rounded bg-blue-700 p-3 m-2 hover:bg-blue-800"
          onClick={inputHandler}
        >
          Send
        </button>
      </form>
    </section>
  );
});

export default ChatInput;
