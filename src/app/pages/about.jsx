import Image from "next/image";
import gradPhoto from "../../../public/Grad_Photo.jpeg";
import OoEPhoto from "../../../public/OrderOfTheEngineer.jpg";
import headshot from "../../../public/headshot.jpg";
import seniorSeason from "../../../public/senior_season.jpg";
import RevealOnScroll from "../components/revealOnScroll";

const About = () => {
  return (
    <div className="p-5">
      <div className="font-bold font-sans text-3xl bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy text-right">
        About Me
      </div>
      <div className="font-sans text-xl">
        <div className="text-center">
          I am a recent graduate of the University of Toledo with a degree in{" "}
          <span className="bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy">
            Computer Science and Engineering
          </span>{" "}
          and an alumni of{" "}
          <span className="bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy">
            Triangle
          </span>
          .
        </div>
      </div>
      <div className="grid grid-cols-2 mx-auto gap-2 md:gap-24 md:w-3/4 mt-10">
        <Image src={seniorSeason} className="rounded-3xl" alt="" />
        <Image src={headshot} className="rounded-3xl" alt="" />
      </div>
    </div>
  );
};
export default About;
