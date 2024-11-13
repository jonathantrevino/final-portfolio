"use client";
import React from "react";
import Image from "next/image";
import { Github, GithubIcon, Linkedin, LinkedinIcon, TwitterIcon, XIcon } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import SkillBadge from "./skillBadge";
import Link from "next/link";
const Heading = () => {
  return (
    <div className="flex max:flex-row flex-col gap-5 mt-[74px] max:items-center">
      <div className="flex-[0.6] max-w-[708px]">
        <h1 className="text-[39px] font-semibold">Jonathan Trevino</h1>
        <p className="mb-[8px] text-[27px] font-medium">
          Software Engineer in Web Development
        </p>
        <p className="mt-[24px] text-[19px] text-gray-700 leading-loose">
          I have a Bachelor's in Computer Science from{" "}
          <a className="custom text-[color:#f15a22]">UTSA</a>, and over 2
          years of experience developing websites.
        </p>
        <div className='text-[19px] text-gray-700 mt-[20px] leading-loose gap-2'>
          Building <Link href='/project/webportfolios.dev'> <span className='h-fit items-center self-center justify-center leading-tight pt-2 inline-flex gap-1 hover:text-primary'><Image src='/webportfolios_dev.svg' width={15} height={15} alt='webportfolios.dev logo' />webportfolios.dev</span></Link>
          , a platform for developers to find portfolio inspiration, built with <SkillBadge image_url={"next.svg"} title={'Next.js'} /> <SkillBadge image_url={"typescript.svg"} title={'TypeScript'} /> <SkillBadge image_url={"tailwind.svg"} title={'Tailwind'} /> <SkillBadge image_url={"firebase.svg"} title={'Firebase'} /> <SkillBadge image_url={"aws.svg"} title={'AWS'} />
        </div>
        <div className="w-fit mt-16">
          <div className="flex gap-2">
            <a
              href="https://www.x.com/jtrevdev"
              target="_blank"
              className="text-gray-500 hover:text-black"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://linkedin.com/in/jonathan-trevino"
              target="_blank"
              className="text-gray-500 hover:text-black"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/jonathantrevino/"
              target="_blank"
              className="text-gray-500 hover:text-black"
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
            animate={{ scale: 1, x: 0, y: 0, opacity: 1, rotate: 0, z: 4 }}
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
              className="relative -right-[60px] md:-right-[40px] -top-12 z-[2] hover:scale-[1.1] transition-all ease-out cursor-grab"
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
            whileHover={{ z: 4 }}
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
