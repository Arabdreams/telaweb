"use client";

import Image from "next/image";
import React from "react";
import useLanguage from "@/store/useLanguage";
import styled from "styled-components";


const ServiceBranchCard = ({ image, name,arabicName,area,arabicArea,capacity,arabicCapacity }) => {
    const { isArabic } = useLanguage ((state) => state);

    return (
        <div>
            <Image src={image} alt="Service" height={400} width={400} />
            <h6 className="m-[20px_0_10px]">{isArabic?arabicName:name}</h6>
            <p className="text-[14px] text-[#525151]">{isArabic?arabicArea:area}</p>
            <p className="text-[14px] text-[#525151]">{isArabic?arabicCapacity:capacity}</p>

        </div>
    );
};

export default ServiceBranchCard;
const ImageDiv= styled.div`
width:100%;
`;
const Images= styled.img`
display:block;
width:100%;
`;