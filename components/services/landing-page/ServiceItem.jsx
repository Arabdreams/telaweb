"use client";

import useLanguage from "@/store/useLanguage";
import { useRouter } from "next/navigation";

const ServiceItem = ({
    backgroundImage = "",
    tags = [],
    title = "",
    description = "",
    arabicTags = [],
    arabicTitle = "",
}) => {
    const router = useRouter();
    const { isArabic } = useLanguage((state) => state);

    return (
        <div
            id="service-item"
            className="w-full sm:w-[70%] md:w-[40%] lg:w-[30%] h-[420px] rounded-[15px] overflow-hidden p-[34px] flex flex-col justify-between"
            style={{
                background: `url(${backgroundImage}) center center no-repeat`,
                backgroundSize: "cover",
            }}
            onClick={() => router.push("services")}
        >
            <div id="top" className="flex flex-wrap gap-[8px] justify-end">
                {(isArabic ? arabicTags : tags).map((tag, i) => (
                    <span
                        key={i}
                        className="bg-[#07070747] text-[14px] border-[1px] border-[#fff] text-[#fff] border-solid w-max rounded-[20px] p-[4px_8px]"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div id="bottom" className="">
                <h6 className="truncate text-[#fff] text-[24px] mb-[8px]">
                    {isArabic ? arabicTitle : title}
                </h6>
                {/* <p className="truncate text-[#ACACAC] text-[18px]">
                    {description}
                </p> */}
            </div>
        </div>
    );
};

export default ServiceItem;
