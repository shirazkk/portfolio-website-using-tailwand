import Button from "./button";
import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RxInstagramLogo } from "react-icons/rx";
import Link from "next/link";
export default function Hero() {
  return (
    <header className="h-auto pt-10 lg:h-screen w-screen bg-purple flex justify-center items-center">
      {/* header-container */}
      <div
        id="hero"
        className="w-[95%]  md:w-[90%] xl:w-[85%]   lg:flex-row flex-col-reverse  flex justify-between items-center"
      >
        {/* left-container */}
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%]  md:block flex justify-center items-center flex-col py-3  h-full">
          <h3 className="text-center lg:text-left py-1 text-orange font-semibold text-2xl">
          Hi, it&apos;s me
          </h3>
          <h1 className="py-1 text-center lg:text-left text-white font-bold text-5xl">
            Shiraz Ali
          </h1>
          <h2 className="text-white py-1 lg:text-left font-semibold text-center text-3xl">
          And I&apos;m a <span className="text-orange ">Frontend Developer</span>{" "}
          </h2>
          <p className="text-white text-lg py-1 w-full  lg:w-[95%] xl:w-[80%] lg:text-left text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum
            non dolorum blanditiis inventore ab dicta soluta eos dignissimos
            nihil. Officia, molestias?
          </p>
          {/* icons */}
          <div className="flex items-center lg:justify-normal justify-center text-white py-7">
            <Link href="">
              <CiFacebook className="me-10 scale-[2.2]" />
            </Link>
            <Link href="">
              <TiSocialLinkedinCircular className="me-10 scale-[2.5]" />
            </Link>
            <Link href="">
              <VscGithub className="me-10 scale-[2]" />
            </Link>
            <Link href="">
              <RxInstagramLogo className="me-10 p-[2.5px] border-white border-[1px] rounded-full  scale-[2.1]" />
            </Link>
          </div>
          <div className="flex justify-center lg:justify-normal items-center w-full">
            <Button
              border="none"
              bgColor="#F86F03"
              color="white"
              text="Download CV"
            />
          </div>
        </div>

        {/* right-container */}
        <div className="max-w-full w-[85%] sm:w-[80%] md:w-[65%] lg:w-[60%]  flex justify-center items-center">
          <Image
            alt="header-image"
            src="/header/header_image.png"
            width={630}
            height={630}
          />
        </div>
      </div>
    </header>
  );
}
