import "../globals.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import NavSlideBar from "@/components/HomeSection/NavSlideBar";

export const metadata = {
  title: "Jack | Full-Stack Developer",
  description: "Portfolio of a Full-Stack Web Developer",
  icons: {
    icon: "/myPhoto.jpg",
  },
};

gsap.registerPlugin(useGSAP);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary">
        <NavSlideBar />
        {children}
      </body>
    </html>
  );
}
