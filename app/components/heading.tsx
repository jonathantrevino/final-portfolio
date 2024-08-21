"use client";
import React from "react";
import Image from "next/image";
import { Github, GithubIcon, Linkedin, LinkedinIcon } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
const Heading = () => {
  return (
    <div className="flex max:flex-row flex-col gap-5 mt-[74px] max:items-center">
      <div className="flex-[0.6] space-y-[30px] max-w-[708px]">
        <div className="">
          <h1 className="text-[39px] font-semibold">Jonathan Trevino</h1>
          <p className="mt-[2px] text-[27px] font-medium">
            Software Engineer in Web Development
          </p>

          <p className="mt-[8px] text-[19px] text-gray-700">
            I have a Bachelor's in Computer Science from{" "}
            <a className="custom text-[color:#f15a22]">UTSA</a>, and over 2
            years of experience developing websites using modern technologies.
          </p>
        </div>
        <div className="w-fit">
          <div className="flex gap-2">
            <a
              href="https://linkedin.com/in/jonathan-trevino"
              target="_blank"
              className="text-gray-500"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/jonathan-trevino/"
              target="_blank"
              className="text-gray-500"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-[1] max:flex-[0.4] justify-end relative flex top-12">
        <AnimatePresence>
          <motion.div
            initial={{
              scale: 1.5,
              x: 200,
              y: 150,
              opacity: 0,
              rotate: 56,
              z: 2,
            }}
            whileHover={{ z: 6 }}
            animate={{ scale: 1, x: 0, y: 0, opacity: 1, rotate: 0, z: 2 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            drag
            dragConstraints={{
              top: -30,
              left: -30,
              right: 30,
              bottom: 30,
            }}
          >
            <Image
              className="relative -right-[60px] md:-right-[40px] -top-12 z-[2] hover:scale-[1.1] hover:z-[4] transition-all ease-out cursor-grab"
              src={"/headshot.png"}
              draggable={false}
              width={232}
              height={283}
              alt=""
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            initial={{
              scale: 1.5,
              x: -50,
              y: -150,
              opacity: 0,
              rotate: -56,
              z: 5,
            }}
            whileHover={{ z: 6 }}
            animate={{ scale: 1, x: 0, y: 0, opacity: 1, rotate: 0, z: 5 }}
            transition={{ delay: 1.1, duration: 0.4 }}
            drag
            dragConstraints={{
              top: -30,
              left: -30,
              right: 30,
              bottom: 30,
            }}
          >
            <Image
              className="relative md:right-12 hover:scale-[1.2] z-[3] transition-all ease-out cursor-grab"
              src={"/setup.png"}
              draggable={false}
              width={232}
              height={283}
              alt=""
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Heading;
