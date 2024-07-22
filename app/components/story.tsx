"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <div className="pt-[109px]" id="story">
      <div className="flex lg:flex-row flex-col  gap-5  mt-[40px]">
        <div className="space-y-5 flex-[0.6] ">
          <h3 className="text-[23px] font-medium">Scalable Coding</h3>
          <p className="max-w-[544px]">
            I know the struggle of maintaining an existing project with bad base
            code, that&apos;s why I create code for humans to read and for
            machines to execute.
          </p>
          <ul className="space-y-[10px]">
            <li className="form-control w-fit !flex !flex-row items-center gap-5">
              <label className="label cursor-pointer !p-0 ">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-primary checked"
                />
              </label>
              <span className="label-text !px-0 !my-0">
                Clean and secure Code
              </span>
            </li>
            <li className="form-control w-fit !flex !flex-row items-center gap-5">
              <label className="label cursor-pointer !p-0 ">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-primary"
                />
              </label>
              <span className="label-text !px-0 !my-0">
                Scalable and easy to maintain
              </span>
            </li>
          </ul>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0.8, translateX: 50 }}
          whileInView={{ scale: 1, opacity: 1, translateX: 0 }}
          transition={{ duration: 0.4, ease: "backInOut" }}
          className="flex-[0.4] flex justify-end"
        >
          <Image
            className="shadow-sm"
            src={"/dark-code.png"}
            width={380}
            height={418}
            alt="code snippet"
          />
        </motion.div>
      </div>
      <div className="flex lg:flex-row-reverse flex-col gap-5  mt-[80px]">
        <div className="space-y-5 flex-[0.6] text-end flex flex-col justify-end">
          <h3 className="text-[23px] font-medium">Cloud Expertise</h3>
          <div className="flex justify-end">
            <p className="max-w-[544px]">
              From my experience building web apps, I am more than familiar with
              the importance of efficiently configuring the cloud platform that
              your service is hosted on.{" "}
            </p>
          </div>
          <ul className="space-y-[10px] self-end flex items-end flex-col">
            <li className="form-control w-fit !flex !flex-row items-center gap-5 justify-end">
              <span className="label-text !px-0 !my-0 ">
                Server Configuration
              </span>

              <label className="label cursor-pointer !p-0 ">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-primary"
                />
              </label>
            </li>
            <li className="form-control w-fit !flex !flex-row items-center gap-5">
              <span className="label-text !px-0 !my-0">Domain Routing</span>
              <label className="label cursor-pointer !p-0 ">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-primary"
                />
              </label>
            </li>
            <li className="form-control w-fit !flex !flex-row items-center gap-5">
              <span className="label-text !px-0 !my-0">Database Setup</span>
              <label className="label cursor-pointer !p-0 ">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-primary"
                />
              </label>
            </li>
            <li className="form-control w-fit !flex !flex-row items-center gap-5">
              <span className="label-text !px-0 !my-0">Rule Configuration</span>
              <label className="label cursor-pointer !p-0 ">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-primary"
                />
              </label>
            </li>
          </ul>
        </div>
        <div className="flex-[0.4] flex justify-start relative">
          {/* <Image */}
          {/*   src={"/cloud.png"} */}
          {/*   width={504} */}
          {/*   height={270} */}
          {/*   alt="cloud service providers" */}
          {/* /> */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.8, translateX: 50 }}
            whileInView={{ scale: 1, opacity: 1, translateX: 0, rotate: -7 }}
            transition={{ duration: 0.4, ease: "backInOut" }}
            className="bg-base-200 px-12 py-12 rounded-lg flex items-center -rotate-[7deg] relative -right-4 h-fit shadow-sm"
          >
            <Image
              src={"/aws-card-light.png"}
              width={154}
              height={154}
              alt="aws"
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0.8, translateX: -50 }}
            whileInView={{ scale: 1, opacity: 1, translateX: 0, rotate: 12 }}
            transition={{ duration: 0.4, ease: "backInOut" }}
            className="bg-base-200 px-12 py-4 rounded-lg rotate-[12deg] shadow-md h-fit"
          >
            <Image
              src={"/azure-card.png"}
              width={154}
              height={154}
              alt="azure"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Story;
