"use client";

import React from "react";
import ServiceBranchCard from "./ServiceBranchCard";
import useLanguage from "@/store/useLanguage";


const ServiceBranches = () => {
    const { isArabic } = useLanguage ((state) => state);

    const serviceData = [
        {
            image: "https://raw.githubusercontent.com/Arabdreams/telaweb/main/s3/landing-page/foodfoto.png",
            name: "Tela Catering Services, Batha Quraysh, Makkah",
            arabicName: "تيلا لخدمات التموين، بطحاء قريش، مكة المكرمة",
            area:"Area: 1,500 square meters",
            arabicArea:"المساحة: 1500 متر مربع",
            capacity:"Capacity: 105,000 meals (including breakfast, lunch, and dinner)",
            arabicCapacity:"الطاقة الاستيعابية: 105,000 وجبة (تشمل الإفطار والغداء والعشاء)",

        },
        {
            image: "https://raw.githubusercontent.com/Arabdreams/telaweb/main/s3/landing-page/catering3-fotor.png",
            name: "Al-Wisam Al-Madani Catering Services, Batha Quraysh, Makkah",
            arabicName: "خدمات التموين الوسام المدني، بطحاء قريش، مكة المكرمة",
            area:"Area: 650 square meters",
            arabicArea:"المساحة: 650 متر مربع",
            capacity:"Capacity: 45,000 meals (including breakfast, lunch, and dinner)",
            arabicCapacity:"الطاقة الاستيعابية: 45,000 وجبة (تشمل الإفطار والغداء والعشاء)",
        },
        {
            image: "https://raw.githubusercontent.com/Arabdreams/telaweb/main/s3/landing-page/makkah-fotor.png",
            name: "Al-Amin Catering Services, Batha Quraysh, Makkah",
            arabicName: "خدمات التموين الأمين، بطحاء قريش، مكة المكرمة",
            area:"Area: 750 square meters",
            arabicArea:"المساحة: 750 متر مربع",
            capacity:"Capacity: 45,000 meals (including breakfast, lunch, and dinner)",
            arabicCapacity:"الطاقة الاستيعابية: 45,000 وجبة (تشمل الإفطار والغداء والعشاء)",
        },
        {
            image: "https://raw.githubusercontent.com/Arabdreams/telaweb/main/s3/landing-page/madinah-fotor.png",
            name: "Tela Catering Services in King Fahd District, Madinah",
            arabicName: "تيلا لخدمات التموين في حي الملك فهد، المدينة المنورة",
            area:"Area: 1,600 square meters",
            arabicArea:"المساحة: 1,600 متر مربع",
            capacity:"Capacity: 105,000 meals (including breakfast, lunch, and dinner)",
            arabicCapacity:"الطاقة الاستيعابية: 105,000 وجبة (تشمل الإفطار والغداء والعشاء)",
        },
    ];
    return (
        <div dir={isArabic ? "rtl" : "ltr"} className="wrapper p-[50px_0] lg:p-[100px_0]">
            <p className="mb-[25px] lg:text-center">
            {isArabic ? "فروعنا" : "Our Branches:"}  
            </p>
            <h4 className="text-[18px] mb-[45px] lg:text-[24px] lg:w-[80%] lg:m-[0_auto_50px] lg:text-center">
            {isArabic ? "تمتلك خدمات تيلا للتموين سلسلة من المطابخ موزعة بين مكة والمدينة" : "Tila Catering Services owns a series of kitchens distributed between Makkah and Madinah:"}    
            </h4>
            <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-2 lg:gap-[30px]">
                {serviceData.map((item, i) => (
                    <ServiceBranchCard key={i} {...item} />
                ))}
            </div>
        </div>
    );
};

export default ServiceBranches;
