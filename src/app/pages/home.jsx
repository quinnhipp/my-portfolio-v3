import Image from "next/image";
import gif from "../../../public/Quinn_Laptop2.gif";
import Socials, { ContactMe, DownloadResume } from "../components/socials";
import scrollDown from "../../../public/scroll_down.webp";
import { useState, useEffect } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 50;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div className="min-h-screen w-screen">
      <div className="text-6xl md:text-8xl text-center font-sans">
        Hello, my name is{" "}
        <span className="font-bold bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy">
          Quinn
        </span>
        , thank you for checking out my website!
        {/* <span className="font-bold bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy">
          web developer
        </span> */}
      </div>
      <div className="flex justify-center">
        <Image src={gif} className="md:w-1/3" alt="" />
      </div>
      {isVisible && (
        <div className="flex md:hidden mx-auto h-fit w-fit mt-8">
          <Image
            src={scrollDown}
            className="bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] animate-gradient-xy w-8 md:w-10"
            alt=""
          />
        </div>
      )}
      <div className="mt-16 md:mt-20 flex flex-col md:flex-row justify-center gap-24 mb-auto">
        <DownloadResume />
        <Socials />
        <ContactMe />
      </div>
      {isVisible && (
        <div className="hidden md:flex h-fit w-fit mt-8 md:mt-12 ml-4">
          <Image
            src={scrollDown}
            className="bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] animate-gradient-xy w-8 md:w-10"
            alt=""
          />
        </div>
      )}
    </div>
  );
};
export default Home;
