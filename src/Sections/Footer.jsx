import React from "react";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="flex flex-1 flex-wrap items-center justify-center gap-5 text-[12px] font-semibold leading-[18px] tracking-[0.03em]">
            <p className="opacity-70">Copyright, Yoram Mengistu</p>
          </div>

          <div className="flex items-center justify-center sm:ml-auto pt-2">
            <p className=" relative mr-9 text-[#c4cbf5] transition-all duration-500 hover:text-[#2ef2ff] after:absolute after:-right-5 after:top-[calc(50%-1px)] after:h-0.5 after:w-0.5 after:rounded-half after:bg-[#3c52d9] after:content-['']">
              Privacy Policy
            </p>
            <p className="relative mr-9 text-[#c4cbf5] transition-all duration-500 hover:text-[#2ef2ff]">
              Terms of Use
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a
                  href={url}
                  className=" flex size-10 items-center justify-center rounded-full border-2 transition-all duration-500 border-[#1959AD40] bg-[#080D270D]  hover:border-[#1959ad] border-"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3  object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
