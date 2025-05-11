import React from "react";
import { Element } from "react-scroll";
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);
  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="text-[64px] font-semibold leading-[56px] tracking-[-0.02em] max-md:text-[32px] max-md:font-semibold max-md:leading-[40px] max-w-640 max-lg:max-w-md mb-7 text-[#eaedff]">
              {" "}
              Curiosity didn't kill the cat, it gave it answers.
            </h3>
            <p className=" max-lg:max-w-sm text-[22px] leading-[36px]">
              {" "}
              You've got questions, we've got answers.
            </p>
          </div>
          <div className="after:absolute after:-top-1.5 after:left-[calc(50%-5px)] after:z-4 after:size-2.5 after:rounded-half after:border-2 after:border-[#0C1838] after:bg-#080D27 after:content-[''] w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-[#0c1838]" />
        </div>

        <div className="before:absolute before:left-[calc(50%-160px)] before:top-[-160px] before:size-[320px]  before:mix-blend-soft-light before:blur-[200px] before:content-[''] relative z-2 border-2 border-[#0c1838] bg-[#080d27] ">
          <div className="container flex gap-10 max-lg:block">
            <div className="rounded-[50%] absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-[#0c1838] bg-[#080d27] ">
              <img
                src="/images/faq-logo.svg"
                alt="logo"
                className="size-1/2 "
              />
            </div>

            <div className="relative flex-1 pt-24 ">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>

            <div className="relative flex-1 pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>

          <div className="after:absolute after:-top-1.5 after:left-[calc(50%-5px)] after:z-4 after:size-2.5 after:rounded-half after:border-2 after:border-[#0C1838] after:bg-[#080D27] after:content-[''] absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-[#0c1838] max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
