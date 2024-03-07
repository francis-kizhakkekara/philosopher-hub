import Image from "next/image";

export default function About() {
  return (
    <section className="rounded bg-[#e6eaed] dark:bg-[#022639] m-2 w-full p-5 flex flex-col items-center">
      <h1 className="text-2xl">About</h1>
      <p>This app let you chat or debate with the greats of philosophy</p>
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
