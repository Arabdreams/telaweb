// /app/contact-us/page.jsx
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/screens/ContactUs"), { ssr: false });

const page = () => {
  return <ContactForm />;
};

export default page;
