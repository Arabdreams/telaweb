import FixedIcons from "@/components/general/FixedIcons";
import Footer from "@/components/general/Footer";
import AboutUs from "@/components/landing-page/AboutUs";
import Collaboration from "@/components/landing-page/Collaboration";
import MissionAndVision from "@/components/landing-page/MissionAndVision";
import ServiceBranches from "@/components/landing-page/ServiceBranches";
import Services from "@/components/landing-page/Services";
import Spotlight from "@/components/landing-page/Spotlight";
import SuccessPartners from "@/components/landing-page/SuccessPartners";

const LandingPage = () => {
    const getConnected = [
        {
            icon: "/icons/whatsapp.svg",
            name: "WhatsApp",
            position: "10%",
            cls: "whatsapp",
            below480: "15%",
            href: "https://wa.me/+966598607490",
        },
    ];
    return (
        <>
            {getConnected.map((item, i) => (
                <FixedIcons key={i} {...item} />
            ))}
            <Spotlight />
            <AboutUs />
            <Services />
            <MissionAndVision />
            <SuccessPartners />
            <Collaboration />
            <ServiceBranches />
            <Footer />
        </>
    );
};

export default LandingPage;
