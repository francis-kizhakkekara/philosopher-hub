import Image from "next/image";

export default function About() {
  return (
    <section className="rounded bg-[#e6eaed] dark:bg-[#022639] m-2 w-full p-5 flex flex-col items-center">
      <h1 className="text-2xl">About</h1>
      <p>
        This app let you chat or debate or colloborate with the greats of
        philosophy
      </p>
      <p>
        In the future, Artificial Intelligence and robotics could automate most
        of tasks where humans are needed. At that moment, more than ever, I
        think we would be asking what it means to be a human? Humanity might
        turn to philosophy, love, religion, spirituality or other endavors to
        find our way. I made this app to help those who turn to philosophy to
        find their way.
      </p>
      <Image
        className="rounded m-3"
        src={"/philosopher-hub.png"}
        alt=""
        height={400}
        width={400}
      />
    </section>
  );
}
