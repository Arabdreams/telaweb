"use client";

import useLanguage from "@/store/useLanguage";
import Image from "next/image";

const MissionAndVision = () => {
    const advantages = [
        {
            icon: "/icons/landing-page/adv-01.svg",
            title: "Flexibility & Customization",
            description:
                "From temporary workers to full-time placements, we offer solutions to suit your needs.",
            arabicTitle: "المرونة والتخصيص",
            arabicDescription:
                "من العمال المؤقتين إلى الوظائف بدوام كامل، نحن نقدم حلولاً تناسب احتياجاتك.",
        },
        {
            icon: "/icons/landing-page/adv-02.svg",
            title: "Culinary Expertise",
            description:
                "Our passionate chefs create exquisite dishes from a diverse range of cuisines.",
            arabicTitle: "خبرة الطهي",
            arabicDescription:
                "يقوم طهاتنا المتحمسين بإعداد أطباق رائعة من مجموعة متنوعة من المأكولات.",
        },
        {
            icon: "/icons/landing-page/adv-03.svg",
            title: "Skilled Labor Solutions",
            description:
                "One-stop  for skilled labor solutions connecting businesses with a diverse talent pool",
            arabicTitle: "حلول العمالة الماهرة",
            arabicDescription:
                "محطة واحدة لحلول العمالة الماهرة التي تربط الشركات بمجموعة متنوعة من المواهب",
        },
    ];

    const { isArabic } = useLanguage((state) => state);

    return (
        <div id="mission-vision" className="p-[58px_0] md:p-[100px_0] wrapper">
            <div id="why-choose-us">
                <div id="top" className="flex align-center flex-col">
                    <h6 className="text-[20px] text-[#000] mb-[20px]">
                        {isArabic ? "لماذا تختارنا؟" : "Why choose us"}
                    </h6>
                    <h3 className="text-[24px] md:text-[34px] text-[#000] md:w-[65%] text-center font-['SF_UI_Display_Medium']">
                        {isArabic
                            ? "اخترنا للحصول على جودة لا مثيل لها وخدمة لا مثيل لها"
                            : "Choose Us for Unmatched Quality and Unparalleled Service"}
                    </h3>
                </div>
                <div
                    id="content"
                    className="flex align-center gap-[48px] md:gap-[32px] justify-center 2xl:justify-end flex-wrap mt-[48px]"
                >
                    {advantages.map((item, i) => (
                        <Item
                            key={i}
                            id={i}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            arabicTitle={item.arabicTitle}
                            arabicDescription={item.arabicDescription}
                        />
                    ))}
                </div>
            </div>
            <div id="vision-mission-container" className="mt-16 md:mt-20">
                <div
                    id="vision"
                    dir={isArabic ? "rtl" : "ltr"}
                    className="flex gap-3 flex-col md:flex-row"
                    // before:w-[6px] before:h-full before:bg-[#D9D9D9] before:block
                >
                    <div className="left w-full md:w-[30%] flex align-center h-max md:pt-[58px] gap-[48px]">
                        <h3 className="text-[20px] font-['SF_UI_Display_Medium']">
                            {isArabic ? "رؤيتنا" : " Our Vision"}
                        </h3>
                        <span className="hidden md:block round w-[12px] h-[12px] bg-[#D9D9D9] rounded-[50%]"></span>
                    </div>
                    <div className="right w-full md:w-[70%]">
                        <p className="vision text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-['SF_UI_Display_Thin'] mb-[32px]">
                            <span className="font-['SF_UI_Display_Light']">
                                {isArabic ? "رؤيتنا" : " Our Vision"}
                            </span>{" "}
                            {isArabic
                                ? "هو تحقيق الانسجام التام بين الاتساق والابتكار، والالتزام بمسؤولية المساهمة في البيئة والحفاظ عليها. بإضافة المعنى والتفاني إلى ما نقوم به في كل نقطة، نحن ملتزمون بدمج المبادئ الأخلاقية والاجتماعية في أعمالنا، مما يتيح تجارب رائعة."
                                : "is to forge the perfect harmony between consistency and innovation, adhering to the responsibility to contribute to and preserve the environment. Adding meaning and dedication to what we do at each point, We are committed to integrating ethical and social principles into our business, enabling remarkable experiences."}
                        </p>
                        <div className="image-container">
                            <Image
                                src="https://raw.githubusercontent.com/Arabdreams/telaweb/main/s3/landing-page/vision.png"
                                alt="vision"
                                className="rounded-lg"
                                width={600}
                                height={350}
                            />
                        </div>
                    </div>
                </div>
                <div
                    id="mission"
                    dir={isArabic ? "rtl" : "ltr"}
                    className="flex gap-3 flex-col md:flex-row mt-16 md:mt-20"
                    // before:w-[6px] before:h-full before:bg-[#D9D9D9] before:block
                >
                    <div className="left w-full md:w-[30%] flex align-center h-max md:pt-[58px] gap-[48px]">
                        <h3 className="text-[20px] font-['SF_UI_Display_Medium']">
                            {isArabic ? "مهمتنا" : "Our Mission"}
                        </h3>
                        <span className="hidden md:block round w-[12px] h-[12px] bg-[#D9D9D9] rounded-[50%]"></span>
                    </div>
                    <div className="right w-full md:w-[70%]">
                        <p className="vision text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-['SF_UI_Display_Thin'] mb-[32px]">
                            {isArabic
                                ? "في تيلا، نحن نؤمن بالقوة التحويلية للخدمة الموثوقة. مهمتنا هي إعادة تعريف تواصلك مع تجارب الطهي ومتطلبات العمل من خلال الاحتفال بالإبداع والتنوع. صياغة البهجة لأصحاب المصلحة والعملاء لدينا من خلال التمسك بأعلى معايير السلامة والموثوقية والاتساق،"
                                : "At Tela, we believe in the transformative power of credible service. Our mission is to redefine your connection with culinary experiences and business requirements by celebrating creativity and diversity. Crafting delight for our stakeholders and customers through upholding the highest benchmarks of safety, reliability, and consistency,"}
                        </p>
                        <div className="image-container">
                            <Image
                                src="https://raw.githubusercontent.com/Arabdreams/telaweb/main/s3/landing-page/mission.png"
                                alt="mission"
                                className="rounded-lg"
                                width={600}
                                height={350}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionAndVision;

const Item = ({
    id = "",
    icon = "",
    title = "",
    description = "",
    arabicTitle = "",
    arabicDescription = "",
}) => {
    const { isArabic } = useLanguage((state) => state);

    return (
        <div
            id={`item-${id}`}
            className="w-full sm:w-[70%] md:w-[40%] lg:w-[30%] flex items-center flex-col gap-[20px]"
        >
            <div className="top center-align w-[78px]">
                <Image
                    className="w-[100%]"
                    src={icon}
                    alt={title}
                    width={36}
                    height={36}
                />
            </div>
            <div className="bottom text-center">
                <span className="title text-[#070707] text-[20px] font-['SF_UI_Display_Medium'] mb-[20px]">
                    {isArabic ? arabicTitle : title}
                </span>
                <p className="text-[18px] text-['SF_UI _Display_Thin']">
                    {isArabic ? arabicDescription : description}
                </p>
            </div>
        </div>
    );
};
