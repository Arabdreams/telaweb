"use client";

import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";
import ToggleLanguage from "./ToggleLanguage";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ResponsiveNavbar from "./ResponsiveNavbar";
import useLanguage from "@/store/useLanguage";

const Header = () => {
    const pathname = usePathname();

    const [scrollingDown, setScrollingDown] = useState(false);
    const [headerTranslateY, setHeaderTranslateY] = useState(0);
    const [isActive, setActive] = useState(false);

    const { isArabic } = useLanguage((state) => state);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                const scrollTop =
                    window.document.documentElement.scrollTop ||
                    window.document.body.scrollTop;

                if (scrollTop > 75) {
                    const scrollY = window.scrollY;
                    setScrollingDown(scrollY > headerTranslateY);
                    setHeaderTranslateY(scrollY);
                }
            }
        };
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, [headerTranslateY]);

    // const darkThemedPages = ["/contact-us", "/about-us", "/services"];
    // const isDark = darkThemedPages.includes(pathname);

    const isDark = false;

    return (
        <Container
            className="flex align-center justify-between w-full"
            $scrollingdown={scrollingDown.toString()}
        >
            <Link href="/">
                <h1>
                    <Image
                        width={200}
                        height={100}
                        src="/icons/logo/tela.svg"
                        alt="tela logo"
                    />
                </h1>
            </Link>
            {isArabic ?  <Navs $isDark={isDark} >
                <ul className="flex align-center">
                    <li>
                        <Link
                            href="/contact-us"
                            className={`${
                                pathname === "/contact-us" ? "active" : ""
                            }`}
                        >
                            {isArabic ? "اتصل بنا" : "Contact Us"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className={`${
                                pathname === "/services" ? "active" : ""
                            }`}
                        >
                            {isArabic ? "خدمات" : "Services"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about-us"
                            className={`${
                                pathname === "/about-us" ? "active" : ""
                            }`}
                        >
                            {isArabic ? "معلومات عنا" : "About Us"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className={`${pathname === "/" ? "active" : ""}`}
                        >
                            {isArabic ? "الصفحة الرئيسية" : "Home"}
                        </Link>
                    </li>
                </ul>
            </Navs> : <Navs $isDark={isDark} >
                <ul className="flex align-center">
                    <li>
                        <Link
                            href="/"
                            className={`${pathname === "/" ? "active" : ""}`}
                        >
                            {isArabic ? "بيت" : "Home"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className={`${
                                pathname === "/services" ? "active" : ""
                            }`}
                        >
                            {isArabic ? "خدمات" : "Services"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about-us"
                            className={`${
                                pathname === "/about-us" ? "active" : ""
                            }`}
                        >
                            {isArabic ? "معلومات عنا" : "About Us"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact-us"
                            className={`${
                                pathname === "/contact-us" ? "active" : ""
                            }`}
                        >
                            {isArabic ? "اتصل بنا" : "Contact Us"}
                        </Link>
                    </li>
                </ul>
            </Navs>}
           
            <Right className="flex align-center gap-[20px]">
                <ToggleLanguage isDark={isDark} />
                <NavIcon onClick={() => setActive(!isActive)}>
                    <Image
                        src={
                            isDark
                                ? "/icons/main/navIconDark.svg"
                                : "/icons/main/navIcon.svg"
                        }
                        alt="nav icon"
                        width={32}
                        height={32}
                    />
                </NavIcon>
            </Right>
            <ResponsiveNavbar
                isActive={isActive}
                closeHandler={() => setActive(false)}
            />
        </Container>
    );
};

export default Header;

const Container = styled.header`
    z-index: 1000;
    padding: 20px 8%;
    position: fixed;
    top: 0;
    left: 0;
    transition: top 0.7s ease-in-out;
    backdrop-filter: blur(30px);
    background: #130e19;

    ${({ $scrollingdown }) =>
        $scrollingdown === "true" &&
        css`
            top: -300px;
        `}

    h1 {
        width: 68px;

        @media all and (max-width: 620px) {
            width: 48px;
        }

        img {
            width: 100% !important;
            height: auto !important;
        }
    }
`;

const Navs = styled.nav`
    @media all and (max-width: 620px) {
        display: none;
    }

    ul {
        gap: 20px;

        li {
            a {
                font-size: 15px;
                font-family: "SF UI Display Ultralight";
                color: ${({ $isDark }) => ($isDark ? "#000" : "#fff")};

                &.active {
                    font-family: "SF UI Display Light";
                }
            }
        }
    }
`;
const Right = styled.div``;
const NavIcon = styled.span`
    display: none;

    @media all and (max-width: 620px) {
        display: block;
        width: 32px;
        cursor: pointer;

        img {
            width: 100% !important;
            height: auto !important;
        }
    }
`;
