"use client";
import { Book, Folder, Folders, Layers3, Mail, Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const ref = useRef<any>(null);

  const mobileMenuVariants = {
    initial: {
      scaleY: 0,
      scaleX: 0,
    },
    animate: {
      scaleY: 1,
      scaleX: 1,
      duration: 5,
    },
    exit: {
      scaleX: 0,
      scaleY: 0,
    },
  };

  useEffect(() => {
    function handleClickOutsideElement(event: any) {
      const buttonElementToTrack =
        document.getElementById("mobile_menu_button"); // Replace 'yourElementId' with the ID of the element you want to track clicks outside of
      const targetElement = event.target;
      const elementToTrack = document.getElementById("mobile_menu"); // Replace 'yourElementId' with the ID of the element you want to track clicks outside of

      if (
        buttonElementToTrack &&
        buttonElementToTrack.contains(targetElement)
      ) {
        setOpen(!open);
        return;
      }
      if (elementToTrack && !elementToTrack.contains(targetElement)) {
        setOpen(false);
      }
    }

    function handleResize() {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    }
    window.addEventListener("click", handleClickOutsideElement);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClickOutsideElement);
    };
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
    <nav className="py-10 flex justify-between h-[60px] w-full items-center max-w-[1440px] mx-auto px-[40px]">
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
          <Image src={"/logo.png"} width={50} height={50} alt="logo" />
        </motion.div>
      </motion.div>
      <div className="md:flex hidden flex-[1] justify-end">
        <div className="flex gap-5">
          <Link href="/#projects" className="flex gap-2 group">
            <Folders
              className="group-hover:-translate-y-[2px] transition-all ease-in-out"
              size={20}
            />
            Projects
          </Link>
          <Link href="/#skills" className="flex gap-2 group">
            <Layers3
              className="group-hover:-translate-y-[2px] transition-all ease-in-out"
              size={20}
            />
            Skills
          </Link>
          {/* <Link href="/connect" className="flex gap-2 group"> */}
          {/*   <Mail */}
          {/*     className="group-hover:-translate-y-[2px] transition-all" */}
          {/*     size={20} */}
          {/*   /> */}
          {/*   Connect */}
          {/* </Link> */}
        </div>
      </div>
      <div className="relative">
        <button
          id="mobile_menu_button"
          className="md:hidden block group"
          onClick={() => setOpen(!open)}
        >
          <Menu className="group-hover:scale-[1.1] transition-all ease-in-out" />
        </button>
        <AnimatePresence>
          {open && (
            <motion.span
              id="mobile_menu"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={mobileMenuVariants}
              className="flex flex-col gap-5 absolute right-0 z-20 bg-white  p-5 rounded-[8px] top-10 border border-[color:#E6E6E7] origin-top-right drop-shadow-sm w-[150px]"
            >
              <Link
                className="group flex items-center gap-2"
                href="#projects"
                onClick={() => setOpen(!open)}
              >
                <Folder
                  className="group-hover:-translate-y-1 transition-all"
                  size={16}
                />
                <p>Projects</p>
              </Link>

              <Link
                className="group flex items-center gap-2"
                href="#skills"
                onClick={() => setOpen(!open)}
              >
                <Layers3
                  className="group-hover:-translate-y-1 transition-all"
                  size={16}
                />
                <p>Skills</p>
              </Link>

              <Link
                className="group flex items-center gap-2"
                href="#connect"
                onClick={() => setOpen(!open)}
              >
                <Mail
                  className="group-hover:-translate-y-1 transition-all"
                  size={16}
                />
                <p>Connect</p>
              </Link>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;
