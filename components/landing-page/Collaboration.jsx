"use client";

import React from "react";
import CollaborationCard from "./CollaborationCard";
import useLanguage from "@/store/useLanguage";

const Collaboration = () => {
    const { isArabic } = useLanguage((state) => state);

    const content = [
        {
            image: "https://raw.githubusercontent.com/Arabdreams/telaweb/main/s3/landing-page/pilgrim1.jpg",
            content: "Pilgrims of the Republic of Uzbekistan",
            arabicContent: "حجاج جمهورية أوزبكستان",
        },
        {
            image: "https://raw.githubusercontent.com/Arabdreams/telaweb/main/s3/landing-page/pilgrim2-fotor.png",
            content: "Pilgrims of the Republic of Azerbaijan",
            arabicContent: "حجاج جمهورية أذربيجان",
        },
        {
            image: "https://raw.githubusercontent.com/Arabdreams/telaweb/main/s3/landing-page/pilgrim3.jpg",
            content: "Pilgrims of the Republic of Turkmenistan",
            arabicContent: "حجاج جمهورية تركمانستان",
        },
        {
            image: "https://raw.githubusercontent.com/Arabdreams/telaweb/main/s3/landing-page/pilgrim4-fotor.png",
            content: "Pilgrims of the Republic of Comoros",
            arabicContent: "حجاج اتحاد جزر القمر",
        },
        // {
        //     image: "/images/landing-page/collaboration-02.png",
        //     content: "Pilgrims of the Republic of Uzbekistan",
        //     arabicContent: "Pilgrims of the Republic of Uzbekistan",
        // },
    ];
    return (
        <div className="p-[50px_0] lg:p-[100px_0]">
            <h4 className="text-center text-[18px] mb-[25px] sm:mb-[45px] md:mb-[55px]">
                {isArabic
                    ? ":البعثات التي تعاونّا معها"
                    : " Missions We Have Collaborated With:"}
            </h4>
            <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                {content.map((item, i) => (
                    <CollaborationCard key={i} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Collaboration;
