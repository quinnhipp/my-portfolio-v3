const Button = ({ label, href, isDisabled }) => {
  if (!isDisabled) {
    return (
      <div className="flex justify-center mt-4 mb-4 absolute bottom-0 left-0 right-0">
        <div className="shadow-md hover:shadow-gray-400 bg-slate-200 text-gray-950 rounded-full px-4 py-2 w-fit">
          <a href={href} target="_blank">
            {label}
          </a>
        </div>
      </div>
    );
  }
};
export default Button;
