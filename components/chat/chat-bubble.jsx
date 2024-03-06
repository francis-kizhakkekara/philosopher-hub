import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function ChatBubble({ message, role }) {
  let styles = "rounded p-2 bg-slate-700 m-2 w-5/6 ";
  const isUser = role === "user";
  styles += isUser ? "self-start" : "self-end";
  // return (
  //   <>
  //     <div className={styles}>
  //       {/* <p>{message}</p> */}
  //       <ReactMarkdown>{message}</ReactMarkdown>
  //     </div>
  //   </>
  // );

  const chatMargin = isUser ? "ml-16" : "mr-16";

  return (
    <>
      <div
        style={isUser ? { direction: "rtl" } : {}}
        className={`flex items-start gap-2 ${chatMargin}`}
      >
        {!isUser && (
          <Image
            className="w-8 h-8 rounded-full"
            src={"/logo-philosopher-hub.png"}
            alt=""
            height={20}
            width={20}
          />
        )}
        {isUser && (
          <svg
            className="w-8 h-8 rounded-full text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8ZM2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12Zm10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2 1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7Z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {/* <img
          className="w-8 h-8 rounded-full"
          src="/logo-philosopher-hub.png"
          alt=""
        /> */}
        <div className="flex flex-col gap-1 w-full ">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {role === "user" ? "User" : "Philosopher"}
            </span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            {/* <p className="text-sm font-normal text-gray-900 dark:text-white">
              {message}
            </p> */}
            <ReactMarkdown>{message}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}
