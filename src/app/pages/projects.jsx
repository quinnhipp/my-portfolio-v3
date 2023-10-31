import PreviewContainer from "../components/previewContainer";
import Todo from "../../../public/ss_todo.png";
import BitmojiLaptop from "../../../public/Quinn_Laptop_Low.png";
import COLogo from "../../../public/Crystal_Orchard_logo.png";
import BioLogo from "../../../public/bioLogo.jpg";
import Multithreading from "../../../public/Multithreading.jpeg";
import FlashDrive from "../../../public/Flash-Drive.png";

const Projects = () => {
  const projects = [
    {
      image: BitmojiLaptop,
      title: "My CV",
      link: "https://qhipp.dev",
      description: "Website created in React to display my portfolio",
      buttonText: "",
      className: "hide-button",
      isDisabled: true,
      id: 1,
    },
    {
      image: COLogo,
      title: "Crystal Orchard",
      link: "https://the-crystal-orchard.vercel.app/",
      description:
        "A band website to display information about the members, their music, photos, and upcoming gig dates.",
      buttonText: "View Website",
      id: 2,
    },
    {
      image: Todo,
      title: "To-Do List",
      link: "https://github.com/quinnhipp/todo-list",
      description:
        "To-Do App that utilizes Nextjs, Typescript, TailwindCSS, and SQLite.",
      buttonText: "View on Github",
      id: 3,
    },
    {
      image: BioLogo,
      title: "Biohazard Printing Website",
      link: "https://www.biohazardprinting.com/",
      description:
        "A small business website to display testimonials, recent work, contact, and payment information.",
      buttonText: "View Website",
      id: 4,
    },
    {
      image: Multithreading,
      title: "Multithreading Applications",
      link: "https://github.com/quinnhipp/Multithreading-Applications",
      description:
        "Implementation of POSIX-Pthreads to multi-thread Quicksort for sorting huge lists.",
      buttonText: "View on Github",
      id: 6,
    },
    {
      image: FlashDrive,
      title: "FAT32",
      link: "https://github.com/quinnhipp/FAT32",
      description: "Created a FAT32 structure from scratch in Linux",
      buttonText: "View on Github",
      id: 7,
    },
  ];

  return (
    <div className="p-5">
      <div className="font-bold font-sans text-3xl bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy text-right mb-10">
        Projects
      </div>
      <div className="m-5">
        <PreviewContainer items={projects} />
      </div>
    </div>
  );
};
export default Projects;
