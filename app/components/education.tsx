import React from "react";

const Education = () => {
  return (
    <div className="pt-[109px]" id="education">
      <div className="flex gap-10 lg:flex-row flex-col">
        <div className="flex-[0.5] space-y-4">
          <h2 className="text-[27px] font-semibold">Education</h2>
          <div className="flex flex-[0.5]  justify-between pl-4 border-l-2">
            <div className="">
              <h3 className="text-[19px] font-medium">
                Bachelor's in Computer Science
              </h3>
              <p className="max-w-[544px] text-gray-700">
                University of Texas at San Antonio
              </p>
            </div>
            <p>2019 - 2023</p>
          </div>
          <div className="flex justify-between pl-4 border-l-2">
            <div className="">
              <h3 className="text-[19px] font-medium">
                Minor in Cyber Security
              </h3>
              <p className="max-w-[544px] text-gray-700">
                University of Texas at San Antonio
              </p>
            </div>
            <p>2019 - 2022</p>
          </div>
        </div>
        <div className="flex-[0.5] space-y-4" id="certifications">
          <h2 className="text-[27px] font-semibold">Certifications</h2>
          <div className="flex flex-[0.5] flex-row justify-between pl-4 border-l-2">
            <div className="">
              <h3 className="text-[19px] font-medium">
                AWS Certified Cloud Practitioner
              </h3>
              <p className="max-w-[544px] text-gray-700">Credly</p>
            </div>
            <p>2024</p>
          </div>
          <div className="flex flex-row justify-between pl-4 border-l-2">
            <div className="">
              <h3 className="text-[19px] font-medium">
                Meta Front-End Developer
              </h3>
              <p className="max-w-[544px] text-gray-700">Coursera</p>
            </div>
            <p>2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
