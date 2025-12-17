import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/general/Header";
import { getImage } from "@/config/cdn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Tela |  Tela Group",
    description: "Tela Catering Kitchens are an ideal destination for pilgrims and Umrah performers looking for a luxurious and diverse culinary experience in Makkah and Madinah. The kitchens offer their esteemed guests unforgettable culinary moments, making them feel as if they are in their second home.",
    image: [getImage("og.png")],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <StyledComponentsRegistry>
                <body className={inter.className}>
                    <Header />
                    {children}
                </body>
            </StyledComponentsRegistry>
        </html>
    );
}
