"use client";


import useLanguage from "@/store/useLanguage";
import Image from "next/image";
import React from "react";

const SuccessPartners = () => {
    const { isArabic } = useLanguage((state) => state);

    const partnerImages = [
        "https://tela-assets.s3.me-south-1.amazonaws.com/images/landing-page/partner-01.png",
        "https://tela-assets.s3.me-south-1.amazonaws.com/images/landing-page/partner-02.png",
    ];
    return (
        <section className="p-[50px_0] bg-[#FAF8F5] lg:p-[100px_0]">
            <div className="wrapper">
                <h4 className="mb-[12px] sm:mb-[16px] lg:text-center lg:mb-[20px]">
                {isArabic ? "شركاءالنجاح" : " Success Partners"}
  
                </h4>
                <p className="text-[18px] mb-[30px] sm:text-[20px] sm:mb-[35px] lg:text-center lg:text-[24px] lg:w-[80%] lg:m-[0_auto_70px]">
                {isArabic ? "على مدار السنوات الماضية، كان لشركة تيلا لخدمات التموين شرف خدمة بعثات الحج والعمرة، التي كانت شركاءنا في النجاح." :"Over the past years,Tela Catering Services has had the honor of serving Hajj and Umrah missions, which have been our partners in success."}
                    
                </p>
                <div className="grid grid-cols-1 gap-[12px] lg:grid-cols-2">
                    {partnerImages.map((image, i) => (
                        <Image
                            key={i}
                            src={image}
                            alt="Partners"
                            width={1280}
                            height={768}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessPartners;
