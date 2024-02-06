import Image from "next/image";

export default function About() {
  return (
    <section className="rounded bg-slate-900 m-2 w-full p-5 flex flex-col items-center">
      <h1 className="text-2xl">About Page</h1>
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
