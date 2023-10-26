import { Progress } from "@nextui-org/react";
import RevealOnScroll from "../components/revealOnScroll";

const Skills = () => {
  return (
    <div>
      <div className="p-5">
        <div className="font-bold font-sans text-3xl bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy text-right">
          Skills
        </div>
        <div className="flex flex-col gap-6 w-full">
          <RevealOnScroll>
            <Progress
              color="warning"
              label="Frontend (JS, HTML, CSS)"
              value={80}
            />
          </RevealOnScroll>
          <RevealOnScroll>
            <Progress color="primary" label="React" value={75} />
          </RevealOnScroll>
          <RevealOnScroll>
            <Progress color="secondary" label="Github" value={95} />
          </RevealOnScroll>
          <RevealOnScroll>
            <Progress color="success" label="C#" value={40} />
          </RevealOnScroll>
          <RevealOnScroll>
            <Progress color="default" label="Java" value={65} />
          </RevealOnScroll>
          <RevealOnScroll>
            <Progress color="danger" label="Python" value={35} />
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};
export default Skills;
