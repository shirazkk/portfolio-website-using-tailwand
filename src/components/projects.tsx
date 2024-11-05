import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";
export default function Projects() {
  return (
    <section
      id="portfolio"
      className="pt-28  w-screen h-auto  flex justify-center items-center  bg-purple"
    >
      {/* section4-container */}
      <div className="xl:w-[85%]  w-[90%]  flex justify-center items-center flex-col  gap-20">
        {/* top-heading */}
        <div className="underline underline-offset-[15px] text-white">
          <h1 className="font-bold text-4xl">Portfolio</h1>
        </div>
        {/* projects-grid */}
        <div className=" w-full sm:w-[90%] h-full auto-rows-[270px]  grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 ">
          <Link
            href="https://github.com/shirazkk/3legant-e-commerce-website"
            className="bg-item-1 bg-cover bg-center hover:scale-110  h-[70%] ml-2 mt-1  relative  cursor-pointer flex justify-center items-center rounded-xl transition-all duration-500 ease-in-out shadow-lg"
          >
            <div className=" rounded-xl absolute top-0 bottom-0 left-0 right-0  bg-lowpurple flex justify-center items-center flex-col text-white transition-all delay-150 ease-in-out  -translate-y-5 hover:translate-y-0 opacity-0 hover:opacity-100 ">
              <i className="text-2xl mb-[0.5rem]">
                <RiExternalLinkLine />
              </i>
              <span className="text-lg">3legant-e-commerce-website </span>
            </div>
          </Link>

          <Link
            href="https://github.com/shirazkk/My-Portfolio-website"
            className="bg-item-2  hover:scale-110 h-[70%] ml-2 mt-1  relative bg-center bg-cover cursor-pointer flex justify-center items-center rounded-xl transition-all duration-500 ease-in-out shadow-lg  item-2"
          >
            <div className="rounded-xl absolute top-0 bottom-0 left-0 right-0  bg-lowpurple flex justify-center items-center flex-col text-white transition-all delay-150 ease-in-out  -translate-y-5 hover:translate-y-0 opacity-0 hover:opacity-100 ">
              <i className="text-2xl mb-[0.5rem]">
                <RiExternalLinkLine />
              </i>
              <span className="text-lg">portfolio-website</span>
            </div>
          </Link>

          <Link
            href="https://github.com/shirazkk/Todo-List"
            className="bg-item-3 hover:scale-110 h-[70%] ml-2 mt-1  relative bg-center bg-cover cursor-pointer flex justify-center items-center rounded-xl transition-all duration-500 ease-in-out shadow-lg  item-3"
          >
            <div className="rounded-xl absolute top-0 bottom-0 left-0 right-0  bg-lowpurple flex justify-center items-center flex-col text-white transition-all delay-150 ease-in-out  -translate-y-5 hover:translate-y-0 opacity-0 hover:opacity-100 ">
              <i className="text-2xl mb-[0.5rem]">
                <RiExternalLinkLine />
              </i>
              <span className="text-lg">Todo-List </span>
            </div>
          </Link>

          <Link
            href="https://github.com/shirazkk/Unique-Path-and-Shareable-Link"
            className="bg-item-4 hover:scale-110 h-[70%] ml-2 mt-1  relative bg-center bg-cover cursor-pointer flex justify-center items-center rounded-xl transition-all duration-500 ease-in-out shadow-lg  item-4"
          >
            <div className="rounded-xl absolute top-0 bottom-0 left-0 right-0  bg-lowpurple flex justify-center items-center flex-col text-white transition-all delay-150 ease-in-out  -translate-y-5 hover:translate-y-0 opacity-0 hover:opacity-100 ">
              <i className="text-2xl mb-[0.5rem]">
                <RiExternalLinkLine />
              </i>
              <span className="text-lg">Resume Builder</span>
            </div>
          </Link>

          <Link
            href="https://github.com/shirazkk/UsabilityHub-Clone-Website"
            className="bg-item-5 hover:scale-110 h-[70%] ml-2 mt-1  relative bg-center bg-cover cursor-pointer flex justify-center items-center rounded-xl transition-all duration-500 ease-in-out shadow-lg  item-5"
          >
            <div className="rounded-xl absolute top-0 bottom-0 left-0 right-0  bg-lowpurple flex justify-center items-center flex-col text-white transition-all delay-150 ease-in-out  -translate-y-5 hover:translate-y-0 opacity-0 hover:opacity-100 ">
              <i className="text-2xl mb-[0.5rem]">
                <RiExternalLinkLine />
              </i>
              <span className="text-lg">UsabilityHub-Clone-Website</span>
            </div>
          </Link>

          <Link
            href="https://github.com/shirazkk/Netflix-Clone"
            className="bg-item-6 hover:scale-110 h-[70%] ml-2 mt-1  relative bg-center bg-cover cursor-pointer flex justify-center items-center  rounded-xl transition-all duration-500 ease-in-out shadow-lg  item-6"
          >
            <div className="rounded-xl absolute top-0 bottom-0 left-0 right-0  bg-lowpurple flex justify-center items-center flex-col text-white transition-all delay-150 ease-in-out  -translate-y-5 hover:translate-y-0 opacity-0 hover:opacity-100 ">
              <i className="text-2xl mb-[0.5rem]">
                <RiExternalLinkLine />
              </i>
              <span className="text-lg">Netflix Clone</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
