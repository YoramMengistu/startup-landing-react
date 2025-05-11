import clsx from "clsx";

const TestimonialItem = ({ item, containerClassName }) => {
  return (
    <div
      className={clsx(
        "relative px-14 pb-14 pt-11 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-[#0C1838] after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4",
        containerClassName
      )}
    >
      <blockquote className=" text-[24px] font-medium leading-[36px] mb-8 text-p4">
        {item.comment}
      </blockquote>

      <div className="flex items-center max-xl:-mr-8">
        <div className="mr-4 size-20 shrink-0 rounded-half border-2 border-[#0C1838] p-1.5">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-[18px] font-semibold leading-[32px] mb-0.5 text-[#2ef2ff]">
            {item.name}
          </h4>
          <p className=" text-[12px] font-semibold leading-[18px] tracking-[0.03em] uppercase text-[#334679]">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialItem;
