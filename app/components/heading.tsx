"use client";
import React from "react";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
const Heading = () => {
  return (
    <div className="flex max:flex-row flex-col gap-5 mt-[74px] max:items-center">
      <div className="flex-[0.6] space-y-[30px] max-w-[708px]">
        <div className="-space-y-[5px]">
          <div className="flex flex-col gap-0">
            <h2 className="text-[19px]">Hi I'm Jonathan Trevino!</h2>
            <h1 className="text-[39px] font-medium mt-[5px]">
              I specialize in web development,
            </h1>
          </div>
          <p className="mt-[8px] text-[19px]">
            where I leverage technologies to create powerful digital solutions.
          </p>
        </div>
        <div className="w-fit">
          <div className="flex gap-3 mt-3">
            <a
              href="https://www.linkedin.com/in/jonathan-trevino/"
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://www.github.com/yeahimjt"
              target="_blank"
              className="btn btn-neutral btn-sm"
            >
              <Github size={20} />
              GitHub
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
