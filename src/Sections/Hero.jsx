import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container flex flex-col lg:flex-row items-center">
          {/* טקסט בצד שמאל */}
          <div className="relative z-2 max-w-2xl text-center lg:text-left lg:w-1/2">
            <div className="text-[12px] font-bold leading-[16px] tracking-[0.3em] uppercase mb-5 text-[#c8ea80]">
              Video Editing
            </div>
            <h1 className="mb-6 text-[84px] font-black leading-[84px] tracking-[-0.03em] text-white uppercase max-lg:mb-7 max-lg:text-[64px] max-lg:leading-[64px] max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>
            <p className="max-w-lg mb-14 text-[22px] leading-[36px] max-md:mb-10 mx-auto lg:mx-0">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>

          {/* תמונה בצד ימין */}
          <div className="mt-12 lg:mt-0 lg:ml-12 w-full lg:w-1/2 flex justify-center">
            <img
              src="/images/hero.png"
              className="max-w-full h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
