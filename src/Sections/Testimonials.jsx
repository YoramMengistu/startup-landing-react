import React from "react";
import { testimonials } from "../constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem.jsx";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);
  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40 ">
      <div className="container block lg:flex">
        <div className=" relative z-2 mr-20 flex-300 max-2xl:mr-6 max-xl:mr-3 max-lg:mx-auto max-lg:mb-36 max-lg:max-w-330 max-lg:text-center max-md:mb-24 max-md:max-w-52">
          <p className="mb-5 max-md:mb-2.5   uppercase text-[#c8ea80]  text-[12px] font-bold leading-[16px] tracking-[0.3em]">
            {" "}
            Wall of Love
          </p>
          <h3 className="text-[48px] font-semibold leading-[56px] tracking-[-0.02em] max-md:text-[32px] max-md:font-semibold max-md:leading-[40px] text-[#eaedff] ">
            Words from our fans
          </h3>
        </div>

        <div className=" after:pointer-events-none after:absolute after:-bottom-52 after:left-[calc(50%-1px)] after:h-24 after:w-0.5 after:bg-[#263466] after:content-[''] after:max-lg:-bottom-24 after:max-md:hidden before:pointer-events-none before:absolute before:-top-28 before:left-[calc(50%-1px)] before:h-[calc(100%+218px)] before:w-0.5 before:bg-s2 before:content-[''] before:max-lg:top-0 before:max-lg:h-full before:max-md:hidden relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="last:relative last:before:pointer-events-none last:before:absolute last:before:left-full last:before:top-[calc(50%-1px)] last:before:mr-6 last:before:h-0.5 last:before:w-[140px] last:before:bg-s5 last:before:content-[''] last:before:max-xl:w-[105px] last:before:max-lg:w-[80px] last:before:max-md:hidden flex-50">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
