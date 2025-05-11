import clsx from "clsx";
import CountUp from "react-countup";
import { features, plans } from "../constants";
import Button from "../components/Button";
import { Element } from "react-scroll";

import React, { useState } from "react";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 before:absolute before:-bottom-44 before:left-1/5 before:h-96 before:w-13/20 before:bg-[#1959ad] before:blur-[200px] before:content-[''] relative mx-auto border-1 border-r border-[#0C1838] bg-[#0c1838] pb-40 pt-28 max-xl:max-w-4xl  max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="text-[48px] font-semibold leading-[56px] tracking-[-0.02em]; max-lg:text-[40px] max-lg:font-semibold max-lg:leading-[52px] text-40px  max-md:text-[32px] max-md:font-semibold max-md:leading-[40px] z-3 relative mx-auto mb-14 max-w-lg text-center text-[#EAEDFF] max-md:mb-11 max-sm:max-w-sm ">
              {" "}
              Flexible pricing for teams of all sizes
            </h3>

            <div
              className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-[#1959ad]/25 bg-[#080d27]/50 backdrop-blur-[6px] max-md:w-[310px]
 "
            >
              <button
                className={clsx(
                  "relative z-2 h-16 flex-1 uppercase text-[#c4cbf5] transition-colors duration-500 hover:text-[#c4cbf5] text-[16px] font-bold leading-[24px]",
                  monthly && "text-[#eaedff]"
                )}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx(
                  "relative z-2 h-16 flex-1 uppercase text-[#c4cbf5] transition-colors duration-500 hover:text-[#c4cbf5] text-[16px] font-bold leading-[24px]",
                  !monthly && "text-[#eaedff]"
                )}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>

              <div
                className={clsx(
                  " before:absolute before:-top-16 before:left-9 before:right-9 before:bg-[#1959ad] before:blur-xl   bg-gradient-to-b from-[#253575] to-[#162561] rounded-2xl before:h-100 absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full"
                )}
              />
            </div>

            <div className="pointer-events-none absolute -bottom-16 left-[calc(50%-480px)] z-2 mx-auto w-960">
              <img
                src="/images/bg-outlines.svg"
                width={968}
                height={380}
                alt="outline"
                className="z-2 relative"
              />

              <img
                src="/images/bg-outlines-fill.png"
                alt="outline"
                width={960}
                height={380}
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>

          {/*  pricing section*/}

          <div className=" scroll-hide  relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="first:rounded-bl-3xl first:rounded-tl-3xl lg:first:border-r-0  last:rounded-br-3xl last:rounded-tr-3xl lg:last:border-l-0  relative border-2 p-7 odd:border-[#334679] odd:bg-[#080d27] lg:odd:mt-12 even:border-[#1959ad] even:bg-[linear-gradient(#1b275a,_#0e1434)]
                even:rounded-bl-3xl even:rounded-br-3xl even:rounded-tl-3xl even:rounded-tr-3xl
                 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
              >
                {index === 1 && (
                  <div className="absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl"></div>
                )}

                <div
                  className={clsx(
                    "absolute left-0 right-0 z-2 flex items-center justify-center",
                    index === 1 ? "-top-6" : "xl:-top-11"
                  )}
                >
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className={clsx(
                      "object-contain drop-shadow-2xl",
                      index === 1 ? "size-[120px]" : "size-[88px]"
                    )}
                  />
                </div>

                <div
                  className={clsx(
                    "text-[12px] font-bold leading-[16px] tracking-[0.3em] rounded-[20px] relative z-2 mx-auto mb-6 mt-[6rem] py-2 border-2 w-34 px-4  uppercase ",
                    index === 1
                      ? "border-[#c8ea80] text-[#c8ea80]"
                      : "border-[#2ef2ff] text-[#2ef2ff]"
                  )}
                >
                  {plan.title}
                </div>

                <div className="relative z-2 flex items-center justify-center">
                  <div
                    className={clsx(
                      "font-inter text-[72px] font-bold leading-[84px]flex items-start",
                      index === 1 ? "text-[#c8ea80]" : "text-[#eaedff]"
                    )}
                  >
                    $
                    <CountUp
                      start={plan.priceMonthly}
                      end={monthly ? plan.priceMonthly : plan.priceYearly}
                      duration={0.4}
                      useEasing={false}
                      preserveValue
                    />
                  </div>
                  <div className="relative top-3 ml-1 uppercase text-[14px] font-semibold leading-[18px] tracking-[0.03em]">
                    /mo
                  </div>
                </div>

                <div
                  className={clsx(
                    "relative z-2 mb-10 w-full border-b-[#0c1838] pb-9 text-center text-[#eaedff]",
                    index === 1 && "border-b"
                  )}
                >
                  {plan.caption}
                </div>

                <ul className="mx-auto space-y-4 xl:px-7">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative flex items-center gap-5"
                    >
                      <img
                        src={"/images/check.png"}
                        alt="check"
                        className="size-10 object-contain"
                      />
                      <p className="flex-1">{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex w-full justify-center">
                  <Button icon={plan.icon}>Get Started</Button>
                </div>

                {index === 1 && (
                  <p className="mt-9 text-center text-[#c8ea80] before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-'] text-[12px] font-semibold leading-[18px] tracking-[0.03em]">
                    {" "}
                    Limited Time Offer
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
