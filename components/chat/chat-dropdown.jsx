import { getTopPhilosophers } from "@/lib/chatDB";
import { useRef } from "react";

export default function ChatDropdown({ initiateChatWith }) {
  const philosopherList = getTopPhilosophers();

  const selectRef = useRef();

  function buttonHandler() {
    const selectLocation = selectRef.current.value;
    console.log(selectLocation);
    initiateChatWith(selectLocation);
  }

  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <>
      <section>
        <label
          htmlFor="philosophers"
          className="inline mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select a Philosoper
        </label>
        <select
          id="philosophers"
          className="inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2"
          onChange={handleChange}
          ref={selectRef}
        >
          {/* <option selected>Choose a philosopher</option> */}
          {philosopherList.map((phil, index) => (
            <option key={index} value={index}>
              {phil.name}
            </option>
          ))}
        </select>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={buttonHandler}
        >
          Go
        </button>
      </section>
    </>
  );
}
