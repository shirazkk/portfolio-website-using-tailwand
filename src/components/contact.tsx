import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import Button from "./button";
export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-16  w-screen h-auto md:h-screen flex justify-center items-center bg-darkblue "
    >
      {/* section5-container */}
      <div className="w-[90%] lg:w-[85%] pb-7 h-full  flex justify-center items-center flex-col gap-5">
        {/* top-heading */}
        <div className="underline underline-offset-[15px] text-white">
          <h1 className="font-bold text-4xl">Contact</h1>
        </div>

        {/* contact-info */}
        <div className="w-full md:w-[90%] h-full pt-16  md:h-[80%] flex md:flex-row flex-col   justify-around items-center gap-10">
          {/* left-text+icons */}
          <div className="text-white flex justify-center items-center flex-col gap-5">
            {/* icons */}
            <div className="w-full flex items-center gap-10">
              <LuPhoneCall className="text-lg" />
              <p>
                +8801863-931220 <br />
                +8801567-953483
              </p>
            </div>
            <div className="w-full flex items-center gap-10">
              <MdOutlineMail className="text-lg" />
              <p>mdriead.bd@gmail.com</p>
            </div>
            <div className="w-full flex items-center gap-10">
              <CiLocationArrow1 className="text-lg" />
              <p>Zirabo, Ashulia, Savar, Dhaka</p>
            </div>
          </div>

          {/* right-contact-form */}
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
            <form action="" className="w-full flex flex-col gap-3">
              <input
                className="p-3 placeholder:text-white placeholder:font-medium border-none bg-inputcolor mb-2 rounded-2xl text-white"
                type="text"
                placeholder="Full Name"
                required
              />
              <input
                className="p-3 placeholder:text-white placeholder:font-medium border-none bg-inputcolor mb-2 rounded-2xl text-white"
                type="email"
                placeholder="Email Address"
                required
              />
              <div className="w-full flex gap-5">
                <input
                  className="w-[50%] p-3 placeholder:text-white placeholder:font-medium border-none bg-inputcolor mb-2 rounded-2xl text-white"
                  type="tel"
                  placeholder="Phone"
                />
                <input
                  className="w-[50%] p-3 placeholder:text-white placeholder:font-medium border-none bg-inputcolor mb-2 rounded-2xl text-white"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <input
                className="h-[150px] p-3 placeholder:text-white placeholder:font-medium border-none bg-inputcolor mb-2 rounded-2xl text-white"
                type="text"
                name=""
                placeholder="Your Message"
              />
              <div className="flex justify-center items-center ">
                <Button
                  text="Send"
                  bgColor=" #43366A"
                  color="white"
                  border="none"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
