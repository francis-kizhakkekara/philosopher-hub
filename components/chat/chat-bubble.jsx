import ReactMarkdown from "react-markdown";

export default function ChatBubble({ message, role }) {
  let styles = "rounded p-2 bg-slate-700 m-2 w-5/6 ";
  styles += role === "user" ? "self-start" : "self-end";
  return (
    <>
      <div className={styles}>
        {/* <p>{message}</p> */}
        <ReactMarkdown>{message}</ReactMarkdown>
      </div>
    </>
  );
}
