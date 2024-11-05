import Link from "next/link";
import Button from "./button";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavBar() {
  return (
    <nav className="fixed z-50 w-screen bg-darkblue flex justify-center items-center py-[10px]">
      <div className="w-[85%] flex justify-between items-center">
        {/* logo */}
        <div className="logo-container">
          <h1 className="inline-block text-[2rem] font-bold text-[#f86f03] shadow-lg text-shadow-lg uppercase px-5 py-2.5 border-2 border-[#390668] rounded transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110 hover:shadow-[0px_4px_15px_rgba(0,0,0,0.2)]">
            SHIRAZ
          </h1>
        </div>
        {/* navigation */}
        <div className="lg:block hidden">
          <ul className="flex justify-center items-center  text-orange">
            <li>
              <Link
                className="hover:underline underline-offset-4 text-white font-bold  ease-in-out transition-all ps-[30px] text-left  hover:text-orange"
                href="#hero"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline underline-offset-4 text-white font-bold ease-in-out transition-all ps-[30px] text-left  hover:text-orange"
                href="#about"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline underline-offset-4 text-white font-bold ease-in-out transition-all ps-[30px] text-left  hover:text-orange"
                href="#services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline underline-offset-4 text-white font-bold ease-in-out transition-all ps-[30px] text-left  hover:text-orange"
                href="#skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline underline-offset-4 text-white font-bold ease-in-out transition-all ps-[30px] text-left  hover:text-orange"
                href="#portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline underline-offset-4  text-white font-bold ease-in-out transition-all ps-[30px] text-left  hover:text-orange"
                href="#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* hire-me button */}
        <div className="lg:block hidden">
          <Button text="Hire Me" />
        </div>
        <div className="lg:hidden block ">
          <Sheet>
            <SheetTrigger className="text-white text-3xl text-center">
              <RxHamburgerMenu />
            </SheetTrigger>
            <SheetContent className="bg-darkblue flex justify-start  items-start text-white">
              <SheetHeader className="text-xl text-white">
              <ul className="flex flex-col justify-start h-[80%] py-16  text-orange">
                <li className="flex justify-start gap-8 flex-col">
                  <Link
                    className="hover:underline underline-offset-4 text-white font-bold  ease-in-out transition-all ps-[30px] text-left  hover:text-orange"
                    href="#hero"
                  >
                    Home
                  </Link>

                  <Link
                    className="hover:underline underline-offset-4 text-white font-bold ease-in-out transition-all ps-[30px] text-left  hover:text-orange"
                    href="#about"
                  >
                    About Me
                  </Link>

                  <Link
                    className="hover:underline underline-offset-4 text-white font-bold ease-in-out transition-all ps-[30px] text-left  hover:text-orange"
                    href="#services"
                  >
                    Services
                  </Link>

                  <Link
                    className="hover:underline underline-offset-4 text-white font-bold ease-in-out transition-all ps-[30px] text-left  hover:text-orange"
                    href="#skills"
                  >
                    Skills
                  </Link>

                  <Link
                    className="hover:underline underline-offset-4 text-white font-bold ease-in-out transition-all ps-[30px] text-left  hover:text-orange"
                    href="#portfolio"
                  >
                    Portfolio
                  </Link>

                  <Link
                    className="hover:underline underline-offset-4  text-white font-bold ease-in-out transition-all ps-[30px] text-left  hover:text-orange"
                    href="#contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
                <SheetDescription>
                  <div className="pl-5">
                    <Button text="Hire Me"  />
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
