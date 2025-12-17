import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
// const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request) {
    const gmail = process.env.EMAIL;
    const password = process.env.PASSWORD;

    console.log(gmail);
    console.log(password);

    // console.log(username);

    console.log("dealing with request");
    // console.log(request);

    const formData = await request.formData();
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");

    // create transporter object
    const transporter = nodemailer.createTransport({
        service: "gmail",

        auth: {
            user: gmail,
            pass: password,
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: gmail,
            to: gmail,
            // replyTo: email,
            subject: `New enquiry from ${name}`,
            html: `
            <p>Name: ${name} </p>
            <p>Phone: ${phone} </p>
            <p>Email: ${email} </p>
            `,
        });

        return NextResponse.json({ message: "Success: email was sent" });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "COULD NOT SEND MESSAGE",
        });
    }
}
