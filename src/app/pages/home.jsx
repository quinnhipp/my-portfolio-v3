import Image from "next/image";
import gif from "../../../public/Quinn_Laptop2.gif";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="text-7xl text-center font-sans">
        Hello, my name is{" "}
        <span className="font-bold bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy">
          Quinn
        </span>{" "}
        and I am a{" "}
        <span className="font-bold bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy">
          web developer
        </span>
      </div>
      <div className="flex justify-center">
        <Image src={gif} className="md:w-1/3" alt="" />
      </div>
    </div>
  );
};
export default Home;
