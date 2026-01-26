"use client";
import ReactGA from "react-ga4";

import Image from "next/image";
import { useEffect } from "react";

const checkFNs = () => {
  console.log("start");
  // GA Common Helper
  const category = "category";
  const identifier = "sasssdjsdj";
  const cntx = "temp";
  const userID =
    typeof window !== "undefined"
      ? (localStorage.getItem("id") ?? "guest")
      : "unknown";
  const label = `web-v3-nextJS -user id:${userID}`;
  const sub = category ?? "web-v3-cart";
  ReactGA.event({
    category: "your category",
    action: "your action",
    label: "your label", // optional
    value: 99, // optional, must be a number
    nonInteraction: true, // optional, true/false
    transport: "xhr", // optional, beacon/xhr/image
  });
  // ReactGA.event(
  //   `${identifier} -label: ${label} -sub: ${sub} -extends: ${
  //     cntx ?? "no-extends"
  //   }`,
  // );
  // ReactGA.event(identifier, {
  //   send_to: "G-2WSVFVWRZ6",
  //   msg: `${identifier} -label:${label} -sub:${sub} -extends:${cntx ?? "no-extends"}`,
  // });
  // ReactGA.event(identifier, {
  //   event_category: category ?? "web-v3-cart",
  //   event_label: `web-v3-nextJS - user id:xxxx`,
  //   context: cntx ?? "no-extends",
  // });
  console.log("end");
};

const checkFN = () => {
  const category = "category";
  const identifier = "new";
  const cntx = "temp";

  const userID =
    typeof window !== "undefined"
      ? (localStorage.getItem("id") ?? "guest")
      : "unknown";

  const label = `web-v3-nextJS -user id:${userID}`;
  const sub = category ?? "web-v3-cart";

  ReactGA.gtag("event", identifier, {
    // DO NOT use send_to here if you already initialize with the same ID
    category: sub,
    label,
    context: cntx ?? "no-extends",
    msg: `${identifier} -label:${label} -sub:${sub} -extends:${cntx ?? "no-extends"}.  1fjwrfhwhfwjhfw wrf wrfw frwf wrfwr f wrf wr 2fw rfw f wrf rw fwr f wr f rwf wr f3 wr f wr frw f wr f rw rw 4f rw fwr fwfw rf wrf w66`,
  });
};

export default function Home() {
  useEffect(() => {
    ReactGA.initialize("G-2WSVFVWRZ6");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div onClick={() => checkFN()}>ssssssspspspspsppspsps</div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
