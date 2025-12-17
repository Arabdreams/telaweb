"use client";

import Footer from "@/components/general/Footer";
import Service from "@/components/services/main/Service";
import useLanguage from "@/store/useLanguage";
import React from "react";

const Page = () => {
    const jobConsulting = [
        {
            image: "https://tela-assets.s3.me-south-1.amazonaws.com/images/services/service-1-1.png",
            title: "Extensive Network",
            description:
                "We have a vast database of pre-vetted skilled laborers, ensuring you have access to the right candidate for the job.",
            arabicTitle: "شبكة واسعة النطاق",
            arabicDescription:
                "لدينا قاعدة بيانات واسعة من العمال المهرة الذين تم فحصهم مسبقًا، مما يضمن حصولك على المرشح المناسب للوظيفة.",
        },
        {
            image: "https://tela-assets.s3.me-south-1.amazonaws.com/images/services/service-1-2.png",
            title: "Tailored Solutions",
            description:
                "Following a detailed process, we build a keen understanding of your needs and project requirements to match you with the most qualified candidates.",
            arabicTitle: "حلول مخصصة",
            arabicDescription:
                "بعد عملية تفصيلية، نقوم ببناء فهم عميق لاحتياجاتك ومتطلبات مشروعك لنطابقك مع المرشحين الأكثر تأهيلاً.",
        },
        {
            image: "https://tela-assets.s3.me-south-1.amazonaws.com/images/services/service-1-3.png",
            title: "Cost-Effectiveness",
            description:
                "Our services are cost-effective, eliminating the overhead costs associated with in-house recruitment efforts.",
            arabicTitle: "فعالية التكلفة",
            arabicDescription:
                "خدماتنا فعالة من حيث التكلفة، مما يلغي التكاليف العامة المرتبطة بجهود التوظيف الداخلية.",
        },
        {
            image: "https://tela-assets.s3.me-south-1.amazonaws.com/images/services/service-1-3.png",
            title: "Streamlined Process",
            description:
                "Say goodbye to the hassle of recruiting and screening candidates. We handle the entire process, saving you valuable time and resources.",
            arabicTitle: "عملية مبسطة",
            arabicDescription:
                "قل وداعًا لمتاعب توظيف المرشحين وفحصهم. نحن نتعامل مع العملية برمتها، مما يوفر لك الوقت والموارد الثمينة.",
        },
    ];
    const cateringAndFood = [
        {
            image: "https://tela-assets.s3.me-south-1.amazonaws.com/images/services/service-2-1.png",
            title: "Culinary Expertise",
            description:
                "A team of passionate chefs, with years of experience, creates exquisite dishes from a diverse range of cuisines. Whether you crave classic elegance or innovative creations, we can create the wonder and taste you crave.",
            arabicTitle: "خبرة الطهي",
            arabicDescription:
                "يقوم فريق من الطهاة المتحمسين، الذين يتمتعون بسنوات من الخبرة، بإعداد أطباق رائعة من مجموعة متنوعة من المأكولات. سواء كنت تتوق إلى الأناقة الكلاسيكية أو الإبداعات المبتكرة، يمكننا أن نصنع العجائب والذوق الذي تتوق إليه.",
        },
        {
            image: "https://tela-assets.s3.me-south-1.amazonaws.com/images/services/service-2-2.png",
            title: "Unparalleled Service",
            description:
                "Our dedicated planners work tirelessly to understand your vision and ensure every detail is flawlessly executed. From menu planning to service, we handle everything professionally and focus on exceeding your expectations.",
            arabicTitle: "خدمة لا مثيل لها",
            arabicDescription:
                "يعمل مخططونا المتفانون بلا كلل لفهم رؤيتك والتأكد من تنفيذ كل التفاصيل بشكل لا تشوبه شائبة. بدءًا من تخطيط القائمة ووصولاً إلى الخدمة، فإننا نتعامل مع كل شيء بشكل احترافي ونركز على تجاوز توقعاتك.",
        },
        {
            image: "https://tela-assets.s3.me-south-1.amazonaws.com/images/services/service-2-3.png",
            title: "Customizable Packages",
            description:
                "Be convenient, there are a variety of catering packages to suit your event size, budget, and theme. Whether it's an intimate gathering or a grand celebration, we can create a personalized catering experience that fits your needs",
            arabicTitle: "حزم قابلة للتخصيص",
            arabicDescription:
                "كن مريحًا، هناك مجموعة متنوعة من عروض تقديم الطعام التي تناسب حجم الحدث الخاص بك وميزانيتك وموضوعه. سواء كان ذلك تجمعًا حميمًا أو احتفالًا كبيرًا، يمكننا إنشاء تجربة تقديم طعام مخصصة تناسب احتياجاتك",
        },
        {
            image: "https://tela-assets.s3.me-south-1.amazonaws.com/images/services/service-2-1.png",
            title: "Fresh, High-Quality Ingredients",
            description:
                "We believe that creating great food starts with the quality of the ingredients. We use only the freshest, locally sourced ingredients to create dishes that are bursting with flavor and quality. Rest assured, there are no compromises on quality",
            arabicTitle: "مكونات طازجة وعالية الجودة",
            arabicDescription:
                "نحن نؤمن بأن صنع طعام رائع يبدأ بجودة المكونات. نحن نستخدم فقط المكونات الطازجة من مصادر محلية لإعداد أطباق مليئة بالنكهة والجودة. كن مطمئنًا، لا يوجد أي تنازلات بشأن الجودة",
        },
        {
            image: "https://tela-assets.s3.me-south-1.amazonaws.com/images/services/service-2-2.png",
            title: "Elegant Presentation",
            description:
                "Food is not just for taste but sometimes it is an art form too. We understand that presentation is important just as much as taste. Our team creates visually stunning displays that add a touch of sophistication and elegance to your event.",
            arabicTitle: "عرض أنيق",
            arabicDescription:
                "الطعام ليس للتذوق فحسب، بل في بعض الأحيان يكون شكلاً من أشكال الفن أيضًا. نحن نفهم أن العرض مهم بقدر أهمية الذوق. يقوم فريقنا بإنشاء عروض مذهلة بصريًا تضيف لمسة من الرقي والأناقة إلى الحدث الخاص بك.",
        },
        {
            image: "https://tela-assets.s3.me-south-1.amazonaws.com/images/services/service-2-3.png",
            title: "Events We Serve",
            description:
                "Including Corporate Catering, Social Gathering, Holiday Parties, and Wedding Events, we cater to a variety of events with the utmost care. Enhancing the experience, our menu will make sure that it spreads a cheer to your guests.",
            arabicTitle: "الأحداث التي نخدمها",
            arabicDescription:
                "بما في ذلك تقديم الطعام للشركات، والتجمعات الاجتماعية، وحفلات العطلات، وفعاليات الزفاف، فإننا نلبي مجموعة متنوعة من المناسبات بعناية فائقة. لتعزيز التجربة، ستضمن قائمتنا نشر البهجة لضيوفك.",
        },
    ];

    const { isArabic } = useLanguage((state) => state);

    return (
        <section id="services" dir={isArabic ? "rtl" : "ltr"}>
            <main className="wrapper pt-[90px] sm:pt-[180px] pb-[60px] sm:pb-[100px]">
                <div className="head flex items-center gap-5 justify-between flex-wrap">
                    <h2 className="text-[28px] sm:text-[38px] w-full md:w-[35%] font-['SF_UI_Display_Medium']">
                        {isArabic ? "خدماتنا" : " Our Services"}
                    </h2>
                    <p className="description w-full md:w-[60%] text-[17px] sm:text-[22px] lg:text-[26px] font-['SF_UI_Display_Thin']">
                        {isArabic
                            ? "مكرسة للتميز، وتقديم النتائج التي تتجاوز معايير الصناعة."
                            : "Dedicated to excellence, delivering results that exceed industry standards."}
                    </p>
                </div>
                <div id="job-consulting" className="m-[40px_0]">
                    <h3 className="text-[#000000] text-[26px] sm:text-[32px] font-['SF_UI_Display_Thin'] mb-[24px]">
                        {isArabic ? "استشارات وظيفية" : "Job Consulting"}
                    </h3>
                    {/* <div className="md:overflow-x-scroll w-full">
                        <ul className="services w-full justify-center md:justify-normal flex flex-wrap md:flex-nowrap items-center gap-3">
                            {jobConsulting.map((item, i) => (
                                <li
                                    key={i}
                                    className="w-full sm:w-[calc(50%-6px)] md:w-[calc(33%-6px)]"
                                >
                                    <Service
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    <ul className="flex flex-wrap gap-3">
                        {jobConsulting.map((item, i) => (
                            <li
                                key={i}
                                className="sm:w-[calc(50%-6px)] md:w-[calc(33%-6px)]"
                            >
                                <Service
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    arabicTitle={item.arabicTitle}
                                    arabicDescription={item.arabicDescription}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div id="catering-and-food" className="m-[40px_0]">
                    <h3 className="text-[#000000] text-[26px] sm:text-[32px] font-['SF_UI_Display_Thin'] mb-[24px]">
                        Catering & Food
                    </h3>
                    <div className="md:overflow-x-scroll w-full">
                        <ul className="services w-full justify-center md:justify-normal flex flex-wrap md:flex-nowrap items-center gap-3">
                            {cateringAndFood.map((item, i) => (
                                <li
                                    key={i}
                                    className="w-full sm:w-[calc(50%-6px)] md:w-[calc(33%-6px)]"
                                >
                                    <Service
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div> */}
                <div className="m-[40px_0]">
                    <h3 className="text-[#000000] text-[26px] sm:text-[32px] font-['SF_UI_Display_Thin'] mb-[24px]">
                        {isArabic ? "تقديم الطعام والطعام" : "Catering & Food"}
                    </h3>
                    <ul className="flex flex-wrap gap-3">
                        {cateringAndFood.map((item, i) => (
                            <li
                                key={i}
                                className="sm:w-[calc(50%-6px)] md:w-[calc(33%-6px)]"
                            >
                                <Service
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    arabicTitle={item.arabicTitle}
                                    arabicDescription={item.arabicDescription}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <Footer />
        </section>
    );
};

export default Page;
