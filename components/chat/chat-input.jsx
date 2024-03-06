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

  // return (
  //   <section className="w-full flex flex-row justify-center fixed bottom-0 bg-black/60 p-3 rounded">
  //     <form className="w-5/6 flex flex-row justify-center" action="">
  //       <input
  //         className="rounded bg-gray-700 w-5/6 p-2"
  //         type="text"
  //         name=""
  //         id=""
  //         placeholder="Input | Ctrl K"
  //         ref={ref}
  //       />
  //       <button
  //         className="rounded bg-blue-700 p-3 m-2 hover:bg-blue-800"
  //         onClick={inputHandler}
  //       >
  //         Send
  //       </button>
  //     </form>
  //   </section>
  // );

  return (
    <form className="w-5/6 fixed bottom-0 p-3 ">
      <div className="rounded-lg border border-gray-400">
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
          <textarea
            id="chat"
            rows="1"
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message... | Ctrl K"
            ref={ref}
          ></textarea>
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            onClick={inputHandler}
          >
            <svg
              className="w-5 h-5 rotate-90 rtl:-rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </div>
    </form>
  );
});

export default ChatInput;
