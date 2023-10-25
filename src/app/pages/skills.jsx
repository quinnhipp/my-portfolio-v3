import { Progress } from "@nextui-org/react";

const Skills = () => {
  return (
    <div>
      <div className="p-5">
        <div className="font-bold font-sans text-3xl bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy text-right">
          Skills
        </div>
        <div className="flex flex-col gap-6 w-full">
          <Progress
            color="warning"
            label="Frontend (JS, HTML, CSS)"
            value={80}
          />
          <Progress color="primary" label="React" value={75} />
          <Progress color="secondary" label="Github" value={95} />
          <Progress color="success" label="C#" value={40} />
          <Progress color="default" label="Java" value={65} />
          <Progress color="danger" label="Python" value={35} />
        </div>
      </div>
    </div>
  );
};
export default Skills;
