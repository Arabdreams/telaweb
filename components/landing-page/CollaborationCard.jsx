"use client";

import Image from "next/image";
import React from "react";
import useLanguage from "@/store/useLanguage";

const CollaborationCard = ({ image, content, arabicContent }) => {
    const { isArabic } = useLanguage((state) => state);

    return (
        <div className="flex flex-col gap-[20px]" dir={isArabic ? "rtl" : "ltr"}>
            <Image
                src={image}
                alt="Collaboration"
                width={1280}
                height={768}
                className="aspect-[1/.7] object-cover"
            />
            <p>{isArabic ? arabicContent : content}</p>
        </div>
    );
};

export default CollaborationCard;
