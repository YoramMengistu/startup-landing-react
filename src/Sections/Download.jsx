import React from "react";
import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";

const Download = () => {
  return (
    <section>
      <Element name="download" className="">
        <div className="bg-gradient-to-b from-[#1b275a] to-[#0e1434] relative pb-32 pt-24 max-lg:pb-24 max-md:py-16">
          <div className="container">
            <div className="flex items-center">
              <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
                <div className="mb-10">
                  <img
                    src="/images/xora.svg"
                    alt="xora"
                    width={160}
                    height={55}
                  />
                </div>
                <p className="mb-10 max-w-md text-[22px] leading-[36px]">
                  Try it now for free on iOS, Android, PC, Web - whatever your
                  flavor, we've got you covered.
                </p>
                <ul className="flex flex-wrap items-center gap-6">
                  {links.map(({ id, url, icon }) => (
                    <li
                      key={id}
                      className="last:relative last:before:pointer-events-none last:before:absolute last:before:left-full last:before:top-[calc(50%-1px)] last:before:mr-6 last:before:h-0.5 last:before:w-[140px] last:before:bg-s5 last:before:content-[''] last:before:max-xl:w-[105px] last:before:max-lg:w-[80px] last:before:max-md:hidden last:after:pointer-events-none last:after:absolute last:after:left-[223px] last:after:top-[calc(50%-5px)] last:after:z-2 last:after:size-2.5 last:after:rounded-half last:after:border-2 last:after:border-s5 last:after:bg-s1 last:after:content-[''] last:after:max-xl:left-[187px] last:after:max-lg:left-[163px] last:after:max-md:hidden "
                    >
                      <a
                        href={url}
                        className="size-22 relative flex items-center justify-center rounded-[50%] border-2 border-[#334679] bg-[#080d27] transition-border-colors duration-150 ease-[cubic-bezier(0.4,_0,_0.2,_1)]"
                      >
                        <span className="absolute -top-2 rotate-90">
                          <Marker />
                        </span>
                        <img
                          src={"/images/lines.svg"}
                          alt="lines"
                          className="absolute w-[65%] h-[65%]"
                        />
                        <span className="relative z-2 flex size-full items-center justify-center transition-all duration-500">
                          {icon}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10 max-md:hidden">
                <div className="relative w-[955px] border-2 p-6 border-[#263466] before:absolute before:-top-0.5 before:right-6 before:h-0.5 before:w-[63.2%] before:opacity-40 before:content-[''] before:bg-gradient-to-r from-transparent via-[#2ef2ff] to-transparent rounded-[40px]">
                  <div className="relative rounded-3xl bg-[#080d27] px-6 pb-6 pt-14">
                    <span className="absolute top-6 size-2.5 rounded-[50%] left-6 bg-[#3c52d9]" />
                    <span className="absolute top-6 size-2.5 rounded-[50%] left-11 bg-[#334679]" />
                    <span className="left-16 absolute top-6 size-2.5 rounded-[50%] bg-[#2ef2ff26]" />

                    <img
                      src="/images/screen.jpg"
                      width={855}
                      height={655}
                      alt="screen"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li className="mx-10" key={id}>
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;
