"use client";

import useLanguage from "@/store/useLanguage";
import ServiceItem from "../services/landing-page/ServiceItem";

const Services = () => {
    const services = [
        {
            title: "Catering",
            description:
                "Enjoy our finest and most vibrant journey of top-class catering service, creating incredible memories and embracing the sense of taste.",
            image: "https://raw.githubusercontent.com/Arabdreams/telaweb/main/s3/landing-page/service-02.png",
            tags: [
                "Culinary Expertise",
                "Unparalleled Service",
                "Customizable Packages",
                "Elegant Presentation",
            ],
            arabicTitle: "تقديم الطعام",
            arabicTags: [
                "خبرة الطهي",
                "خدمة لا مثيل لها",
                "حزم قابلة للتخصيص",
                "عرض أنيق",
            ],
        },
        {
            title: "Labour Contract",
            description:
                "We specialize in connecting businesses with a diverse pool of talented and experienced professionals across various trades.",
            image: "https://raw.githubusercontent.com/Arabdreams/telaweb/main/s3/landing-page/service-01.png",
            tags: [
                "Extensive Network",
                "Streamlined Process",
                "Cost-Effectiveness",
                "Tailored Solutions",
            ],
            arabicTitle: "عقد العمل",
            arabicTags: [
                "شبكة واسعة النطاق",
                "عملية مبسطة",
                "فعالية التكلفة",
                "حلول مخصصة",
            ],
        },
    ];
    const { isArabic } = useLanguage((state) => state);

    return (
        <section
            id="services"
            className="bg-[#130E19] p-[100px_0] sm:pt-[50px] sm:pb-[50px]"
        >
            <div className="wrapper" >
                <div dir={isArabic ? "rtl" : "ltr"} id="top" className=  {isArabic?"w-[100%] md:w-[100%] mb-[48px]":"w-[100%] md:w-[50%] mb-[48px]"}>
                    <h3 className="service text-[#fff] text-[20px] mb-[20px]">
                        {isArabic ? "خدمات" : "Services"}
                    </h3>
                    <p className="text-[20px] md:text-[28px] text-[#fff]">
                        {isArabic
                            ? "أنا حر، ولكن لا لاعبو الحياة كذلك. لأنه سيكون جيدًا في الوقت المناسب. فليكن أن الابتسامة على الحلق تحتاج"
                            : " I am free, but neither are the players of life. For it will be good in time. Let it be that the smile on the throat needs"}
                    </p>
                </div>
                <div
                    id="content"
                    // dir={isArabic ? "rtl" : "ltr"}
                    className="flex items-center gap-[32px] justify-center md:justify-end 2xl:justify-end flex-wrap"
                >
                    {services.map((service, i) => (
                        <ServiceItem
                            key={i}
                            backgroundImage={service.image}
                            tags={service.tags}
                            title={service.title}
                            // description={service.description}
                            arabicTitle={service.arabicTitle}
                            arabicTags={service.arabicTags}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
