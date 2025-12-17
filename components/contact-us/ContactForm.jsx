"use client";

import Input from "@/components/general/Input";
import { submitContactUs } from "@/server-actions/submitContactUs";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/general/Button";
import useLanguage from "@/store/useLanguage";
import { useState } from "react";
import Loader from "../../screens/Loader";

const ContactForm = () => {
    const [loader,SetLoader]= useState(false);
    const validationSchema = Yup.object().shape({
        name: Yup.string().trim().required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        phone: Yup.string()
            .trim()
            .matches(/^\d+$/, "Please enter only digits")
            .required("Phone is required"),
    });

    // const formik = useFormik({
    //     initialValues: {
    //         name: "",
    //         email: "",
    //         phone: "",
    //     },
    //     validationSchema,
    //     onSubmit: (data) => {
    //         SetLoader(true);
    //         // submitContactUs(values);
    //         const formData = new FormData();
    //         formData.append("name", data?.name);
    //         formData.append("email", data?.email);
    //         formData.append("phone", data?.phone);

    //         sendEnquiryHandler(formData);
    //         formik.resetForm();
    //         SetLoader(false);
    //     },
    // });

    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          phone: "",
        },
        validationSchema,
        onSubmit: async (data) => {
          SetLoader(true);
          const formData = new FormData();
          formData.append("name", data.name);
          formData.append("email", data.email);
          formData.append("phone", data.phone);
      
          try {
            await sendEnquiryHandler(formData);
          } catch (error) {
            console.error("Error sending enquiry:", error);
          }
          formik.resetForm();
          SetLoader(false);
        },
      });
      

    const sendEnquiryHandler = async (formData) => {
        SetLoader(true);

        try {
            const response = await fetch("/api/contact", {
                method: "post",
                body: formData,
            });

            if (!response.ok) {
                console.log("falling over");
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData["message"]);

            alert("Message successfully sent");
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    };

    const { isArabic } = useLanguage((state) => state);

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="right form w-full  md:w-[45%] p-[38px_16px] md:p-[48px_24px] rounded-[10px]"
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
                        label= {isArabic ? "الاسم" : "Name"}
                        placeholder= {isArabic ? "أَدْخِلِ الِاسْمَ" : "Enter Name"}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        error={
                            formik.touched.name &&
                            formik.errors.name &&
                            formik.errors.name
                        }
                    />
                </div>
                <div className="input-container mb-[16px]">
                    <Input
                        name="email"
                        label= {isArabic ? " البَرِيدُ الإِلِكْتْرُونِيُّ" : "Email"}
                        placeholder={isArabic ? "أَدْخِلِ البَرِيدَ الإِلِكْتْرُونِيَّ" : "Enter email"}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={
                            formik.touched.email &&
                            formik.errors.email &&
                            formik.errors.email
                        }
                    />
                </div>
                <div className="input-container">
                    <Input
                        name="phone"
                        label={isArabic ? "رَقْمُ الهَاتِفِ " : "Phone Number"}
                        type="number"
                        placeholder={isArabic ? "أَدْخِلْ رَقْمَ الهَاتِفِ" : "Enter Phone Number"}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        error={
                            formik.touched.phone &&
                            formik.errors.phone &&
                            formik.errors.phone
                        }
                    />
                </div>
            </div>
            <div className="button-wrapper mt-[48px]">
                {
                     loader?
                <Loader /> :<Button type="submit" title={isArabic ? "إِرْسَال" : "Submit"} />
                }
               
            </div>
        </form>
    );
};

export default ContactForm;
