"use client";

import useLanguage from "@/store/useLanguage";
import Image from "next/image";
import React from "react";

const Service = ({
    image = "",
    title = "",
    description = "",
    arabicTitle = "",
    arabicDescription = "",
}) => {
    const { isArabic } = useLanguage((state) => state);

    return (
        <div className="w-full border-[#F6EEF4] border border-solid p-4 rounded-md">
            <div className="image-container w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className="w-full object-cover"
                />
            </div>
            <div className="bottom mt-3">
                <h6 className="text-[22px] sm:text-[24px] font-['SF_UI_Display_Light'] text-black">
                    {isArabic ? arabicTitle : title}
                </h6>
                <p className="line-clamp-5 text-[15px] sm:text-[17px] mt-2 font-['SF_UI_Display_Thin']">
                    {isArabic ? arabicDescription : description}
                </p>
            </div>
        </div>
    );
};

export default Service;
