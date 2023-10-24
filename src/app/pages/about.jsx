import Image from "next/image";
import gradPhoto from "../../../public/Grad_Photo.jpeg";
import OoEPhoto from "../../../public/OrderOfTheEngineer.jpg";

const About = () => {
  return (
    <div>
      <div className="font-bold font-sans text-3xl bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy text-right">
        About Me
      </div>
      <div className="font-sans text-lg">
        <div className="">
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
      <div className="grid grid-cols-2 gap-2">
        <Image src={gradPhoto} className="rounded-3xl" />
        <Image src={OoEPhoto} className="rounded-3xl" />
      </div>
    </div>
  );
};
export default About;
