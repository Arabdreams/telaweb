"use client";

import Input from "@/components/general/Input";
import Button from "@/components/general/Button";
import useLanguage from "@/store/useLanguage";
import { useState } from "react";
import Loader from "../../screens/Loader";

const ContactForm = () => {
    const [loader, SetLoader] = useState(false);
    const { isArabic } = useLanguage((state) => state);

    // Fake formik object just to preserve design
    const formik = {
        handleSubmit: (e) => e.preventDefault(), // prevent actual submission
        values: { name: "", email: "", phone: "" },
        touched: { name: false, email: false, phone: false },
        errors: { name: "", email: "", phone: "" },
        handleChange: () => {}, // no-op
    };

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="right form w-full md:w-[45%] p-[38px_16px] md:p-[48px_24px] rounded-[10px]"
            style={{
                boxShadow: "0px 4px 104px 0px rgba(0, 0, 0, 0.07)",
            }}
        >
            <h5 className="text-[#070707] text-[22px] sm:text-[26px] md:text-[32px] text-center font-['SF_UI_Display_Medium'] mb-[42px]">
                {isArabic ? "قل مرحبا" : "Say Hello"}
            </h5>

            <div className="inputs">
                <div className="input-container mb-[16px]">
                    <Input
                        name="name"
                        label={isArabic ? "الاسم" : "Name"}
                        placeholder={isArabic ? "أَدْخِلِ الِاسْمَ" : "Enter Name"}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        error={formik.touched.name && formik.errors.name && formik.errors.name}
                        disabled
                    />
                </div>
                <div className="input-container mb-[16px]">
                    <Input
                        name="email"
                        label={isArabic ? "البَرِيدُ الإِلِكْتْرُونِيُّ" : "Email"}
                        placeholder={isArabic ? "أَدْخِلِ البَرِيدَ الإِلِكْتْرُونِيَّ" : "Enter email"}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.touched.email && formik.errors.email && formik.errors.email}
                        disabled
                    />
                </div>
                <div className="input-container">
                    <Input
                        name="phone"
                        label={isArabic ? "رَقْمُ الهَاتِفِ" : "Phone Number"}
                        type="number"
                        placeholder={isArabic ? "أَدْخِلْ رَقْمَ الهَاتِفِ" : "Enter Phone Number"}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        error={formik.touched.phone && formik.errors.phone && formik.errors.phone}
                        disabled
                    />
                </div>
            </div>

            <div className="button-wrapper mt-[48px]">
                {loader ? (
                    <Loader />
                ) : (
                    <Button
                        type="button"
                        title={isArabic ? "إِرْسَال" : "Submit"}
                        disabled
                    />
                )}
            </div>

          
        </form>
    );
};

export default ContactForm;
