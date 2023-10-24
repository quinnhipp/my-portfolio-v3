import { Progress } from "@nextui-org/react";

const Skills = () => {
  return (
    <div>
      <div className="p-5">
        <div className="font-bold font-sans text-3xl bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy text-right">
          Skills
        </div>
        <div className="flex flex-col gap-6 w-full max-w-md">
          <Progress label="Loading..." value={70} />
          <Progress color="primary" label="Loading..." value={70} />
          <Progress color="secondary" label="Loading..." value={70} />
          <Progress color="success" label="Loading..." value={70} />
          <Progress color="warning" label="Loading..." value={70} />
          <Progress color="danger" label="Loading..." value={70} />
        </div>
      </div>
    </div>
  );
};
export default Skills;
