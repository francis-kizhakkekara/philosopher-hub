"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function About() {
  const [recieved, setRecieved] = useState(false);
  const emailRef = useRef();
  const messageRef = useRef();

  async function feedbackHandler(e) {
    e.preventDefault();

    console.log(emailRef.current.value, messageRef.current.value);
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    });
    const data = await res.json();
    if (data["feedback"]) {
      setRecieved(true);
    }
  }

  return (
    <section className="rounded bg-[#e6eaed] dark:bg-[#022639] m-2 w-full p-5 flex flex-col items-center">
      {recieved && <h1 className="text-2xl">Thank your for your feedback!</h1>}
      {!recieved && (
        <>
          <h1 className="text-2xl">Feedback</h1>
          <p>
            If you want a feature request or add a philosopher to the list or
            anything else, comment below
          </p>

          <form className="w-9/12 mx-auto">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
                ref={emailRef}
              />
            </div>

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
              ref={messageRef}
            ></textarea>

            <button
              type="submit"
              className="mt-5 text-black bg-[#8ECAE6] hover:bg-[#219EBC] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#8ECAE6]dark:hover:bg-[#219EBC] dark:focus:ring-blue-800"
              onClick={feedbackHandler}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </section>
  );
}
