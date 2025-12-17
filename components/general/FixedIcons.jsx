"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";

const FixedIcons = ({ name, icon, position, cls, below480, href = "" }) => {
    return (
        <Container
            href={href}
            target="_blank"
            $position={position}
            $below480={below480}
            rel="noopener noreferrer"
        >
            <div className="icon-container">
                <Image src={icon} width={30} height={30} alt="Icons" />
                <span>{name}</span>
            </div>
        </Container>
    );
};

export default FixedIcons;

const Container = styled.a`
    /* .icon-container { */
    position: fixed;
    right: 0;
    bottom: ${({ $position }) => $position};
    z-index: 10000;
    padding: 18px;
    background-color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 192px;
    transition: all 0.6s ease;
    transform: translateX(136px);
    .icon-container {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    @media all and (max-width: 1180px) {
        padding: 16px;
        gap: 10px;
    }
    @media all and (max-width: 980px) {
        padding: 14px;
        gap: 12px;
    }
    @media all and (max-width: 768px) {
        padding: 12px;
        gap: 14px;
    }
    @media all and (max-width: 480px) {
        width: 182px;
        bottom: ${({ $below480 }) => $below480};
    }
    img {
        width: 30px;
        height: 30px;
        @media all and (max-width: 480px) {
            width: 25px;
            height: 25px;
        }
    }
    span {
        flex-shrink: 0;
        font-size: 20px;
        color: #000;
        /* font-family: PrimeformProMedium; */
        transition: all 0.8s linear;
        @media all and (max-width: 480px) {
            font-size: 16px;
        }
    }
    &:hover {
        transform: translateX(0);
    }
    /* } */
`;
