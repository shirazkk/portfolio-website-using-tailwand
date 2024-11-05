import Button from "./button";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="h-auto pt-5 lg:h-screen w-screen gap-8 lg:gap-24 bg-darkblue flex justify-center items-center flex-col"
    >
      {/* heading */}

      <div className="pt-16 underline underline-offset-[15px] text-white">
        <h1 className="font-bold text-4xl">
          About <span className="text-orange">Me</span>
        </h1>
      </div>

      <div className="py-4 lg:w-[85%] w-[90%]  lg:flex-row flex-col flex justify-center items-center gap-20">
        {/* left-picture */}
        <div className="h-full flex justify-center items-center w-[85%] sm:w-[80%]  md:w-[70%] lg:w-[60%]  xl:w-[50%] 2xl:w-[40%] " >
          <Image
            className="image rounded-2xl"
            src="/profilepic.jpg"
            alt="About Me"
            width={400}
            height={400}
          />
        </div>
        {/* right-text */}
        <div className="right-text w-full md:w-[90%] lg:w-[80%]  h-full text-white flex justify-center flex-col gap-6">
          <h1 className="text-4xl font-semibold lg:text-left text-center">
            Frontend Developer & <br />
            Graphic Designer
          </h1>
          <p className="lg:w-[90%] w-full  text-[1.1rem] lg:text-left text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reiciendis, quas voluptatum facere quam iusto itaque sapiente dolor
            provident aspernatur unde, suscipit illum, velit similique animi
            iste corporis repellendus veritatis minus voluptas. Sunt, eligendi.
            Praesentium explicabo facere quo ad earum.
          </p>

          <p className="text-[1.1rem] lg:w-[90%] w-full lg:text-left text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reiciendis, quas voluptatum facere quam iusto itaque sapiente dolor
            provident.
          </p>
          <div className="lg:text-left text-center">
            <Button text="Read More..." />
          </div>
        </div>
      </div>
    </section>
  );
}
