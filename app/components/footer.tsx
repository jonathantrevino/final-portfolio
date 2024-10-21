"use client";
import {
  CopyrightIcon,
  GithubIcon,
  LinkedinIcon,
  MoveRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MapPin, Clock, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Footer = () => {
  const router = useRouter();
  const [time, setTime] = useState<string | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const ref = useRef<any>(null);

  function copyEmailToClipBoard() {
    navigator.clipboard.writeText("hello@jonathantrevino.com");
    toast.success("Email Address Copied", { position: "bottom-right" });
  }

  function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // "0" should be converted to 12

    setTime(`${hours}:${minutes}:${seconds} ${ampm}`);
  }
  useEffect(() => {
    // Update time immediately when the page loads
    updateTime();

    // Update time every second
    setInterval(updateTime, 1000);
  }, []);

  const mouseMove = (e: any) => {
    if (!ref) return;
    const { clientX, clientY } = e;
    const { width, height, left, right, top, bottom } =
      ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    if (
      clientX < left || // cursor is to the left of the box
      clientX > right || // cursor is to the right of the box
      clientY < top || // cursor is above the box
      clientY > bottom // cursor is below the box
    ) {
      setPosition({ x: 0, y: 0 });
    } else {
      setPosition({ x, y });
    }
  };

  const mouseLeave = (e: any) => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <footer className="mt-[209px]  p-[40px] max-w-[1440px] mx-auto space-y-7">
      <section className="flex gap-5   md:flex-row-reverse flex-col-reverse">
        <aside className="space-y-3 flex-[0.4] pt-3 flex flex-col justify-end">
          <div className="flex gap-2 items-center text-[19px] badge badge-neutral !p-4">
            <div className="relative">
              <div className="bg-green-500 w-[15px] h-[15px] rounded-full"></div>
              <div className="bg-green-500 absolute bottom-[2px] left-[2px] w-[11px] h-[11px] rounded-full animate-ping"></div>
            </div>
            Available For Work
          </div>

          <div className="flex gap-2 font-light text-gray-500">
            <MapPin />
            Edinburg, Texas
          </div>
          <div className="flex gap-2 font-light text-gray-500">
            <Clock />
            <p>{time}</p>
          </div>
        </aside>
        <section className="flex-[0.6] space-y-3">
          <h2 className="text-[27px] font-semibold">Let's Chat</h2>
          <p>
            Any questions, proposals, or collaborations? Feel free to reach out.
          </p>
          <button
            className="group flex gap-2 text-primary hover:text-primary text-primary/80 active:scale-95 transition-all ease-out"
            onClick={copyEmailToClipBoard}
          >
            <Copy className="group-hover:scale-[1.05] transition-all ease-in-out" />
            hello@jonathantrevino.com
          </button>
          <div className="flex gap-2">
            <a
              href="https://linkedin.com/in/jonathan-trevino"
              target="_blank"
              className="text-gray-500"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/jonathantrevino/"
              target="_blank"
              className="text-gray-500"
            >
              <GithubIcon />
            </a>
          </div>
        </section>
      </section>
      <section className="space-y-1">
        <div className="flex justify-between items-center flex-wrap gap-5">
          <div className="flex items-center gap-2">
            <motion.div
              onMouseMove={mouseMove}
              onMouseLeave={mouseLeave}
              ref={ref}
              className="cursor-pointer relative"
              onClick={() => router.push("/")}
            >
              <motion.div
                animate={{ x, y }}
                transition={{
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 90,
                  damping: 100,
                }}
              >
                <Image src={"/logo.png"} width={35} height={35} alt="logo" />
              </motion.div>
            </motion.div>
            <h3 className="text-[23px] font-medium">Jonathan Trevino</h3>
          </div>
          <div className="">
            <p className="">Built with</p>
            <div className="flex gap-2 flex-wrap">
              <Image
                className="rounded-md hover:scale-125 transition-all"
                src="/next.svg"
                width={35}
                height={35}
                alt="next logo"
              />
              <Image
                className="rounded-md hover:scale-125 transition-all"
                src="/tailwind.svg"
                width={35}
                height={35}
                alt="typescript logo"
              />
              <Image
                className="rounded-md hover:scale-125 transition-all"
                src="/framer.svg"
                width={35}
                height={35}
                alt="framer logo"
              />

              <Image
                className="rounded-md hover:scale-125 transition-all"
                src="/typescript.svg"
                width={35}
                height={35}
                alt="typescript logo"
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
