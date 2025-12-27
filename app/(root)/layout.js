import "../globals.css"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
export const metadata = {
  title: "Jack | Full-Stack Developer", // Changes the text in the browser tab
  description: "Portfolio of a Full-Stack Web Developer", // Used by Google for SEO
  icons: {
    icon: '/myPhoto.jpg', // The path to your image in the 'public' folder
  },
}
gsap.registerPlugin(useGSAP);
export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
   
      <body className="bg-primary">{children}</body>
    </html>
  );
}
