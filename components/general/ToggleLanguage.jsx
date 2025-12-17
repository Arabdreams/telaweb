"use client";

import useLanguage from "@/store/useLanguage";
import styled from "styled-components";

const ToggleLanguage = ({ isDark = false }) => {
    const { isArabic, toggleLanguage } = useLanguage((state) => state);

    return (
        <ToggleButtonContainer
            $english={!isArabic}
            onClick={toggleLanguage}
            $isDark={isDark.toString()}
        >
            <span className="eng">EN</span>
            <div className="tgl-btn">
                <span className="circle"></span>
            </div>
            <span className="arb">عربي</span>
        </ToggleButtonContainer>
    );
};

export default ToggleLanguage;

const ToggleButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    @media all and (max-width: 768px) {
        /* display: none; */
    }
    .eng {
        color: ${({ $isDark }) => ($isDark === "true" ? "#000" : "#fff")};
        /* color: ${({ $english }) =>
            $english === true ? "#5baacc" : "#fff"}; */
        font-size: 16px;

        @media all and (max-width: 768px) {
            font-size: 14px;
        }
    }
    .arb {
        color: ${({ $isDark }) => ($isDark === "true" ? "#000" : "#fff")};
        /* color: ${({ $english }) =>
            $english === true ? "#5baacc" : "#fff"}; */
        font-size: 16px;

        @media all and (max-width: 768px) {
            font-size: 14px;
        }
    }
    .tgl-btn {
        width: 60px;
        height: 30px;
        background-color: #1f1f1f;
        border-radius: 25px;
        position: relative;
        cursor: pointer;

        @media all and (max-width: 768px) {
            width: 45px;
            height: 24px;
        }
        @media all and (max-width: 768px) {
            width: 35px;
            height: 20px;
        }

        .circle {
            width: 25px;
            height: 25px;
            background-color: #fff;
            border-radius: 50%;
            position: absolute;
            left: ${({ $english }) => ($english === true ? "2px" : "auto")};
            top: 50%;
            transform: translateX(
                    ${({ $english }) => ($english ? "0" : "33px")}
                )
                translateY(-50%);
            transition: all 0.5s linear;

            @media all and (max-width: 768px) {
                width: 14px;
                height: 14px;

                left: ${({ $english }) => ($english === true ? "2px" : "auto")};
                top: 50%;
                transform: translateX(
                        ${({ $english }) => ($english ? "0" : "18px")}
                    )
                    translateY(-50%);
            }
            @media all and (max-width: 420px) {
                width: 16px;
                height: 16px;

                left: ${({ $english }) => ($english === true ? "1px" : "auto")};
                top: 50%;
                transform: translateX(
                        ${({ $english }) => ($english ? "0" : "18px")}
                    )
                    translateY(-50%);
            }
        }
    }
`;
