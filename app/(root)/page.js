import LaptopMan from "@/components/AboutSection/LaptopMan";
import ShowOffMan from "@/components/AboutSection/ShowOffMan";
import MyPhotoAvatar from "@/components/HomeSection/MyPhotoAvatar";
import RotatingText from "@/components/RotatingText";
import PixelTransition from "@/components/AboutSection/PixelTransition";
import DotGrid from "@/components/DotGrid";
import Squares from "@/components/Squares";
import { BBH_Bartle, Share_Tech } from "next/font/google";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const bbhBartle = BBH_Bartle({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bbh-bartle",
});

export const shareTech = Share_Tech({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-share-teach",
});

export default function Home() {
  return (
    <div>
      {/* Home Section */}
      <section className="relative w-full h-screen overflow-hidden bg-[#060606]">
        {/* 1. Add absolute positioning wrapper for Squares */}
        <div className="absolute inset-0 w-full h-full  opacity-25">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="#fff"
            hoverFillColor="#222"
          />
        </div>

        <div
          id="main-section"
          className="relative z-10 flex items-center justify-center min-h-screen h-full w-full pointer-events-none"
        >
          <div className="w-full h-full min-h-screen flex items-center justify-center">
            <div className="flex flex-col gap-4 justify-center items-center pointer-events-auto">
              {/* Image Section */}
              <MyPhotoAvatar />

              {/* About */}
              <div className="flex flex-col gap-3 justify-center items-center text-center px-4">
                <h1
                  className={`${bbhBartle.className} flex flex-col items-center text-accent`}
                >
                  <span className="text-lg sm:text-2xl">Full-stack</span>
                  <span className="text-xl sm:text-4xl">web developer</span>
                </h1>
                <div>
                  <div
                    className={`flex flex-wrap justify-center items-center gap-2 text-lg sm:text-2xl text-white ${shareTech.className}`}
                  >
                    <h1>Building, </h1>
                    <RotatingText
                      texts={["Fast", "Scalable", "Modern"]}
                      mainClassName=""
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden p-1 sm:p-1.5 text-accent rounded btn-box w-20 sm:w-24 flex justify-center items-center backdrop-blur-xs"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={2000}
                    />
                    <h1>web applications.</h1>
                  </div>
                  <p
                    className={`max-w-md text-white/70  mt-4 text-xs font-light sm:text-base  text-balance `}
                  >
                    Portfolio of a full-stack web developer experienced in
                    frontend, backend, APIs, and databases. Focused on clean
                    code, performance, and real-world solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="my-4 p-4 text-white flex flex-col md:flex-row gap-12 justify-center items-center md:justify-around w-full min-h-screen h-full overflow-hidden ">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1
            className={`${bbhBartle.className} text-base flex justify-center items-center md:justify-start`}
          >
            <strong className="text-2xl">#</strong>About Section
          </h1>
          <div>
            <p className="text-sm md:text-base text-justify">
              Hi, I’m <strong>Jack</strong>, a junior full-stack developer who
              enjoys learning and building modern web applications. I mainly
              work with <strong>Laravel 11</strong>, <strong>React</strong>,{" "}
              <strong>Vue</strong>, <strong>JavaScript</strong>,
              <strong>Bootstrap</strong>, and <strong>Tailwind CSS</strong>, and
              I focus on improving my skills by building real projects and
              writing clean, readable code.
            </p>
          </div>

          <div>
            <h3 className={`${shareTech.className} text-base`}>
              My Certificate
            </h3>
            <ul className="flex gap-2 justify-start text-xs lg:text-sm ">
              <li className=" bg-accent hover:bg-accent/90 p-1  rounded ">
                <a
                  href="/public/certificate/Thant Thurein Htut Vue JS Certificate.jpg"
                  download
                >
                  #Vue + Laravel From (Code lab)
                </a>
              </li>
              <li className="  bg-accent p-1 hover:bg-accent/90  rounded">
                <a
                  href="/public/certificate/Thant Thurein Htut Web Design Certificate.jpg"
                  download
                >
                  #Web Desgin From (Code lab)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex justify-center mb-14">
          <PixelTransition
            firstContent={
              <Image
                src="/myPhoto.jpg"
                alt=""
                width={250}
                height={250}
                loading="eager"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className=""
              />
            }
            secondContent={
              <Image
                src="/cartoonMyPhoto.png"
                alt="cartoon"
                width={250}
                height={250}
                loading="eager"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            gridSize={12}
            pixelColor="#ffff"
            once={false}
            animationStepDuration={0.4}
            className="custom-pixel-card h-96 "
          />

          <LaptopMan />
          <ShowOffMan />
        </div>
      </section>

      {/* Project Section */}
      <section className="my-4 p-4 min-h-screen  h-full w-full text-white flex flex-col gap-6 md:w-11/12 md:mx-auto">
        <h1
          className={`${bbhBartle.className} text-base flex justify-center items-center `}
        >
          <strong className="text-2xl">#</strong>Project Section
        </h1>
        <p className="text-justify">
          <strong>
            <a href="https://www.yaycha.blog" target="_self">
              Yaycha.blog
            </a>
          </strong>{" "}
          is the biggest project I’ve built so far. It’s a blogging platform
          featuring <u>real-time</u> view counts and a notification system for
          likes, follows, and interactions. I even integrated an{" "}
          <u>AI title generator</u> for Bluecheck verified users. This project
          was my first deep dive into{" "}
          <u>complex database design and relationships.</u> It taught me so much
          about Laravel and React, especially working with real-time data using{" "}
          <u>WebSockets (Laravel Reverb and Echo).</u> This project truly pushed
          my skills to the next level.
        </p>
        <div className={`${shareTech.className} grid lg:grid-cols-2 gap-6`}>
          <div className="flex flex-col gap-2">
            <h2 className="underline decoration-accent text-lg">Login Page</h2>
            <Image
              src="/loginPage.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full border border-dashed border-accent rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="underline decoration-accent text-lg">Home Page</h2>
            <Image
              src="/homePage.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full border border-dashed border-accent rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="underline decoration-accent text-lg">Create Page</h2>
            <Image
              src="/createPage.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full border border-dashed border-accent rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="underline decoration-accent text-lg">Admin Page</h2>
            <Image
              src="/adminPage.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full border border-dashed border-accent rounded"
            />
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative h-screen w-full  ">
        <div className="absolute inset-0 w-full h-full  opacity-25">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#FB2576"
            activeColor="#FB2576"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className=" top-0 p-6 text-white relative z-10 flex justify-around items-center  min-h-screen h-full w-full  ">
          <div className="z-50 flex flex-col gap-4">
            <div>
              <h1
                className={`${bbhBartle.className} text-base flex justify-center items-center `}
              >
                <strong className="text-2xl">#</strong>Contact Section
              </h1>
              <p className={`${shareTech.className}`}>
                Got a project in mind? Lets build something awesome together. Im
                always happy to chat about web development, new tech, or just
                say hi
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 md:gap-2 w-full ">
              <a href="mailto:coderjackmyanmar@gmail.com" className="flex items-center justify-center p-4 md:p-0 gap-2 md:row-span-2 md:col-span-3 w-full backdrop-blur-sm btn-box">
                <MdEmail className="size-6 md:size-10  text-accent" />
                <h1 className={`${shareTech.className}`}>
                  coderjackmyanmar@gmail.com
                </h1>
              </a>
              <a href="https://github.com/ThantThureinHtut" className="flex items-center justify-center p-4 col-span-1 gap-2 backdrop-blur-sm btn-box">
                <FaGithub className="size-6 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/thant-thurein-htut-42b02a350/" className="flex items-center justify-center p-4 col-span-1 gap-2 bg-blue-500 btn-box">
                <FaLinkedin className="size-6  text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
