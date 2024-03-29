import PreviewContainer from "../components/previewContainer";
import Tom from "../../../public/Tom_Pic.jpeg";
import Brian from "../../../public/Brian_Pic.jpeg";
import Pat from "../../../public/Pat_Pic.jpeg";

const References = () => {
  const items = [
    {
      image: Pat,
      title: "Patrick Kania",
      link: "https://drive.google.com/file/d/1qg6ZOotLrJ-rZG6bm1aSuJYDO8bAKQDG/view?usp=sharing",
      description:
        '"Quinn has consistently demonstrated a deep understanding of computer science concepts and has a unique ability to convey these complex ideas to students of varying backgrounds. He acted professionally as a teacher and never missed work while I supervised him. He attended various meetings and communicated with other members of the department on a consistent basis."',
      buttonText: "View Full Reference",
      className: "hide-button",
      isDisabled: false,
      id: 1,
    },
    {
      image: Tom,
      title: "Thomas Welch",
      link: "https://drive.google.com/file/d/1kSnj886qJl5Zk13rcdc6zI09tGcxcRxf/view?usp=sharing",
      description:
        '"Quinn is a hard worker, detail-oriented, and reliable. He is highly intelligent and has great analytical skills with the commitment to implement the best possible solution. In my observation, I believe him to be trusted in critical situations as he is cautious, as well as holds the capacity to complete tasks with minimum guidance. He has always been willing to try unfamiliar tasks and apply his skills in new ways. Quinn has consistently submitted quality deliverables on time."',
      buttonText: "View Full Reference",
      id: 2,
    },
    {
      image: Brian,
      title: "Brian Francis",
      link: "https://drive.google.com/file/d/1kSnj886qJl5Zk13rcdc6zI09tGcxcRxf/view?usp=sharing",
      description:
        '"After over a year of working with Quinn I must say he is a highly motivated and driven developer that I see a lot of potential in. As his mentor I saw someone who was driven and had an appetite for learning new things. He is kind and respectful to his co-workers and has a great sense of humor. I see a lot of potential in Quinn and think he will be a great fit for any software development team."',
      buttonText: "",
      className: "hide-button",
      isDisabled: true,
      id: 3,
    },
  ];

  return (
    <div id="References" className="p-5">
      <div className="font-bold font-sans text-3xl bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy text-right">
        References
      </div>
      <div className="m-5">
        <PreviewContainer items={items} />
      </div>
    </div>
  );
};
export default References;
