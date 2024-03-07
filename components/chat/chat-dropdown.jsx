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
        <div className="flex flex-col items-center justify-center">
          <label
            htmlFor="philosophers"
            className="inline mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a Philosoper
          </label>
          <div className="flex items-center justify-center">
            <select
              id="philosophers"
              className="inline bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-[#219EBC] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2"
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
              className="text-black bg-[#8ECAE6] hover:bg-[#219EBC] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:219EBC dark:hover:bg-[#219EBC] focus:outline-none dark:focus:ring-blue-800"
              onClick={buttonHandler}
            >
              Go
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
