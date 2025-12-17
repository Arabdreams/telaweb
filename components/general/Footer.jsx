"use client";

import useLanguage from "@/store/useLanguage";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { isArabic } = useLanguage((state) => state);

    return (
        <footer
            id="footer"
            
            className="m-2 sm:m-6 bg-[#130E19] rounded-lg md:rounded-[30px] p-[58px_0]"
        >
            <div id="content" className="wrapper">
            dir={isArabic ?
            <div
                    id="top"
                    className="flex justify-between items-center flex-col md:flex-row gap-11 md:gap-0 pb-10 border-b border-b-[#fff] border-solid"
                >
                   
                    <div className="right w-full md:max-w-[50%] md:w-min flex flex-col justify-between">
                        <address dir={isArabic ? "rtl" : "ltr"} className="w-full sm:w-[50%] md:w-[80%] text-[#fff] font-['SF_UI_Display_Light'] not-italic mb-6">
                            {isArabic
                                ? "المكتب الرئيسي : مكة المكرمة - حي بطحاء قريش"
                                : "Abu Al - Qasim Habeesh Street, Batha Quraysh,Mecca, Kingdom of Saudi Arabia"}
                        </address>
                        <p className="contact flex items-start gap-[12px] md:gap-[14px] md:w-max " >
                        <span className="right flex  items-center flex-wrap gap-[6px]" >
                                <a
                                    href="tel:+966598607490"
                                    className="text-[#fff] text-[16px]"
                                >
                                    +966 598607490
                                </a>
                            </span>
                            <span className="icon center-align w-[20px]" >
                                <Image
                                    src="/icons/main/phone.svg"
                                    alt="phone"
                                    width={20}
                                    height={20}
                                />
                            </span>
                           
                        </p>
                    </div>
                    <div className="left w-full md:w-[40%]" dir={isArabic ? "rtl" : "ltr"}>
                        <h6 className="text-[#fff] text-[15px] mb-2">
                            {isArabic ? "اتصل بنا" : "Contact Us"}
                        </h6>
                        <h3 className="text-white text-[20px] md:text-[32px] lg:text-[40px] font-['SF_UI_Display_Medium']">
                            {isArabic ? (
                                "دعونا نناقش شكوكك معنا"
                            ) : (
                                <>
                                    Let’s <span className="">discuss</span> your{" "}
                                    <span className="">doubts</span> with us
                                </>
                            )}
                            <Link
                                href="/contact-us"
                                className="flex align-center gap-[14px] mt-3 border-[1px] bg-[#fff] border-solid w-max rounded-[20px] p-[6px_15px]"
                            >
                                <span className="text text-[#000] text-[14px]">
                                    {isArabic
                                        ? "احصل على عرض أسعار!"
                                        : "Get a quote!"}
                                </span>
                                <span className="icon center-align w-[22px]">
                                    <Image
                                        className="w-[100%]"
                                        src="/icons/main/right-arrow.svg"
                                        alt="right arrow"
                                        width={20}
                                        height={20}
                                    />
                                </span>
                            </Link>
                        </h3>
                    </div>
                </div> : <div
                    id="top"
                    className="flex justify-between items-center flex-col md:flex-row gap-11 md:gap-0 pb-10 border-b border-b-[#fff] border-solid"
                >
                    <div className="left w-full md:w-[40%]">
                        <h6 className="text-[#fff] text-[15px] mb-2">
                            {isArabic ? "اتصل بنا" : "Contact Us"}
                        </h6>
                        <h3 className="text-white text-[20px] md:text-[32px] lg:text-[40px] font-['SF_UI_Display_Medium']">
                            {isArabic ? (
                                "دعونا نناقش شكوكك معنا"
                            ) : (
                                <>
                                    Let’s <span className="">discuss</span> your{" "}
                                    <span className="">doubts</span> with us
                                </>
                            )}
                            <Link
                                href="/contact-us"
                                className="flex align-center gap-[14px] mt-3 border-[1px] bg-[#fff] border-solid w-max rounded-[20px] p-[6px_15px]"
                            >
                                <span className="text text-[#000] text-[14px]">
                                    {isArabic
                                        ? "احصل على عرض أسعار!"
                                        : "Get a quote!"}
                                </span>
                                <span className="icon center-align w-[22px]">
                                    <Image
                                        className="w-[100%]"
                                        src="/icons/main/right-arrow.svg"
                                        alt="right arrow"
                                        width={20}
                                        height={20}
                                    />
                                </span>
                            </Link>
                        </h3>
                    </div>
                    <div className="right w-full md:max-w-[50%] md:w-min flex flex-col justify-between">
                        <address className="w-full sm:w-[50%] md:w-[80%] text-[#fff] font-['SF_UI_Display_Light'] not-italic mb-6">
                            {isArabic
                                ? "المكتب الرئيسي : مكة المكرمة - حي بطحاء قريش"
                                : "Abu Al - Qasim Habeesh Street, Batha Quraysh,Mecca, Kingdom of Saudi Arabia"}
                        </address>
                        <p className="contact flex items-start gap-[12px] md:gap-[14px] md:w-max " >
                            <span className="icon center-align w-[20px]" >
                                <Image
                                    src="/icons/main/phone.svg"
                                    alt="phone"
                                    width={20}
                                    height={20}
                                />
                            </span>
                            <span className="right flex  items-center flex-wrap gap-[6px]" >
                                <a
                                    href="tel:+966598607490"
                                    className="text-[#fff] text-[16px]"
                                >
                                    +966 598607490
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
                }
                {!isArabic?<div
                    id="bottom"
                    className="mt-10 flex lg:items-center justify-between flex-col lg:flex-row gap-10 lg:gap-0"
                >
                    <div className="left flex lg:items-center justify-between flex-col lg:flex-row gap-8 w-full lg:w-[60%]">
                        <div className="logo-container w-16 sm:w-24">
                            <Image
                                src="/icons/logo/tela-group.svg"
                                alt="tela"
                                width={40}
                                height={40}
                            />
                        </div>
                        <ul className="flex items-center gap-4 sm:gap-5">
                            <li>
                                <Link
                                    className="text-[#C1C1C1] text-[14px] sm:text-[16px]"
                                    href="/"
                                >
                                    {isArabic ? "الصفحة الرئيسية" : "Home"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-[#C1C1C1] text-[14px] sm:text-[16px]"
                                    href="/services"
                                >
                                    {isArabic ? "خدمات" : "Services"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-[#C1C1C1] text-[14px] sm:text-[16px]"
                                    href="/about-us"
                                >
                                    {isArabic ? "معلومات عنا" : "About Us"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-[#C1C1C1] text-[14px] sm:text-[16px]"
                                    href="/contact-us"
                                >
                                    {isArabic ? "اتصل بنا" : "Contact Us"}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right w-max">
                        <p className="text-[#C1C1C1] w-max">
                            &copy; {isArabic ? "تيلا 2025. جميع الحقوق محفوظة" : "tela 2025.All rights reserved"} 
                        </p>
                    </div>
                </div>:
                <div
                id="bottom"
                className="mt-10 flex lg:items-center justify-between flex-col lg:flex-row gap-10 lg:gap-0"
            >
                <div className="left flex lg:items-center justify-between flex-col lg:flex-row gap-8 w-full lg:w-[60%]">
                <div className="right w-max">
                    <p className="text-[#C1C1C1] w-max">
                         {isArabic ? "تيلا 2025. جميع الحقوق محفوظة" : "tela 2025.All rights reserved"} &copy;
                    </p>
                </div>
                    
                    <ul className="flex items-center gap-4 sm:gap-5">
                        
                        <li>
                            <Link
                                className="text-[#C1C1C1] text-[14px] sm:text-[16px]"
                                href="/contact-us"
                            >
                                {isArabic ? "اتصل بنا" : "Contact Us"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-[#C1C1C1] text-[14px] sm:text-[16px]"
                                href="/services"
                            >
                                {isArabic ? "خدمات" : "Services"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-[#C1C1C1] text-[14px] sm:text-[16px]"
                                href="/about-us"
                            >
                                {isArabic ? "معلومات عنا" : "About Us"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-[#C1C1C1] text-[14px] sm:text-[16px]"
                                href="/"
                            >
                                {isArabic ? "الصفحة الرئيسية" : "Home"}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="logo-container w-16 sm:w-24">
                        <Image
                            src="/icons/logo/tela-group.svg"
                            alt="tela"
                            width={40}
                            height={40}
                        />
                    </div>
                
            </div>
                }  
            </div>
        </footer>
    );
};

export default Footer;
