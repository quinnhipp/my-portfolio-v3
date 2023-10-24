const Education = () => {
  return (
    <div>
      <div className="p-5">
        <div className="font-bold font-sans text-3xl bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy text-right">
          Education
        </div>
        <div>
          <div className="font-bold text-2xl bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy mt-5">
            University of Toledo
          </div>
          <div className="text-lg text-slate-600">
            Bachelor of Science: Computer Science and Engineering
          </div>
          <div className="text-sm text-slate-600">
            August 2018 - December 2022
          </div>
          <ul className="list-disc list-outside pl-5">
            <li>GPA: 3.23</li>
            <li>Triangle Fraternity Alumni</li>
            <li>
              Men's Ultimate Disc
              <ul className="list-square list-inside">
                <li>2021 - 2022: President, Captain, Treasurer</li>
                <li>2019 - 2021: Vice President</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Education;
