"use client";

import useLanguage from "@/store/useLanguage";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const AboutUs = () => {
    const { isArabic } = useLanguage((state) => state);

    return (
        <Container dir={isArabic ? "rtl" : "ltr"} id="about-us" className="wrapper flex gap-[20px]">
            <Left className="w-[25%]">
                <h3 className="font-['SF_UI_Display_Light'] text-[20px]">
                    {isArabic ? "معلومات عنا" : "About Us"}
                </h3>
            </Left>
            <Right className="w-[65%]">
                <p className="text-[18px] lg:text-[26px] sm:text-[20px] font-['SF_UI_Display_Ultralight']">
                    {isArabic ? (
                        "تجعل Tela تجارب لا تُنسى من خلال مزيج من التميز في الجودة والخدمة المتميزة المقدمة بأسلوب أنيق. نحن شركة خدمات أعمال ذات خبرة ولها مشاريع مختلفة تشمل صناعتي تقديم الطعام والعمل."
                    ) : (
                        <>
                            <span className="font-['SF_UI_Display_Light']">
                                Tela
                            </span>{" "}
                            makes experiences unforgettable with a combination
                            of excellence in{" "}
                            <span className="font-['SF_UI_Display_Light']">
                                quality
                            </span>{" "}
                            and{" "}
                            <span className="font-['SF_UI_Display_Light']">
                                premium service
                            </span>{" "}
                            delivered in style. We are an experienced business
                            service firm with various ventures spanning the{" "}
                            <span className="font-['SF_UI_Display_Light']">
                                catering
                            </span>{" "}
                            and{" "}
                            <span className="font-['SF_UI_Display_Light']">
                                labour industries.
                            </span>
                        </>
                    )}
                    {/* I am free, but neither are the players of life. For it will
                    be good in time.{" "}
                    <span className="font-['SF_UI_Display_Light']">
                        Let it be that the smile
                    </span>{" "}
                    on the throat needs I am free, but neither are the players
                    of life. For it will be good in time.{" "}
                    <span className="font-['SF_UI_Display_Light']">
                        Let it be that the smile
                    </span>{" "}
                    on the throat needs */}
                </p>
                <Button
                    href="/about-us"
                    className="flex align-center gap-[14px] border-[1px] border-[#000] border-solid w-max rounded-[20px] p-[6px_15px] mt-[24px]"
                >
                    <span className="text">
                        {isArabic ? "يتعلم أكثر" : "Learn More"}
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
                </Button>
            </Right>
        </Container>
    );
};

export default AboutUs;

const Container = styled.section`
    padding: 98px 0;

    @media all and (max-width: 980px) {
        flex-direction: column;
    }
    @media all and (max-width: 480px) {
        padding: 50px 0;
    }
`;

const Left = styled.div`
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Right = styled.div`
    p {
        /* font-size: 18px; */
    }

    @media all and (max-width: 980px) {
        width: 100%;
    }
`;

const Button = styled(Link)``;
