import Image from "next/image";
import Button from "./Button";

const PreviewContainer = ({ items }) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-10">
      {items.map((item) => (
        <div className="shadow-md shadow-slate-200 rounded-3xl bg-gray-950 relative p-4">
          <div className="flex justify-center">
            <Image src={item.image} className="w-1/2 h-1/4 rounded-xl" alt="" />
          </div>
          <div className="font-sans mb-20">
            <div className="font-bold text-center text-xl mb-4 mt-2">
              {item.title}
            </div>
            <div className="text-center">{item.description}</div>
          </div>
          <Button
            href={item.link}
            label={item.buttonText}
            isDisabled={item.isDisabled}
          />
        </div>
      ))}
    </div>
  );
};
export default PreviewContainer;
