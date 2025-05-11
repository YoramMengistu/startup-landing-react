import { Element } from "react-scroll";

import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-[#334679] rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:bg-[linear-gradient(#1b275a,#0e1434)] max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-[#334679] max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    <div className="w-0.5 h-16 bg-[#334679]" />

                    <img
                      src={icon}
                      className="size-28 object-contain"
                      alt={title}
                    />
                  </div>
                </div>

                <p className=" uppercase mb-5 max-md:mb-6 text-[#C8EA80] text-[12px] font-bold leading-[16px] tracking-[0.3em]">
                  {caption}
                </p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:text-[48px] max-md:font-semibold max-md:leading-[56px] max-md:tracking-[-0.02em]">
                  {title}
                </h2>
                <p className="mb-11 text-[22px] leading-[36px]max-md:mb-8 max-md:text-[16px] max-md:leading-[28px] max-md:tracking-[0.02em]">
                  {text}
                </p>
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}

            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-[#334679] rounded-7xl max-md:hidden">
              <div className="absolute bg-[#334679] top-[38%] left-0 right-0 w-full h-[1px] z-10" />

              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-[#334679] w-[1px] h-full z-10" />

                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>

                  <h3 className="relative z-2 max-w-36 mx-auto my-0 text-[14px] font-semibold leading-[18px] tracking-[0.03em] text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Features;
 