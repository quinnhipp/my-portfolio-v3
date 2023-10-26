"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import RevealOnScroll from "./revealOnScroll";

export const DownloadResume = () => {
  return (
    <div>
      <div className="font-bold text-lg text-center bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy animate-bounce">
        DOWNLOAD MY RESUME!
      </div>
      <div className="flex gap-x-3 mt-3 md:mt-8 justify-center">
        <a
          href="/HippQuinnlan_Resume.pdf"
          target="_blank"
          className="hover:bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] rounded-xl p-1"
        >
          <FontAwesomeIcon
            icon={faFileArrowDown}
            style={{ color: "#ffffff" }}
            size="3x"
          />
        </a>
      </div>
    </div>
  );
};
DownloadResume;

const Socials = () => {
  return (
    <div className="flex gap-x-3 mt-3 md:mt-8 justify-center">
      <RevealOnScroll>
        <a
          href="https://www.linkedin.com/in/quinnlanhipp/"
          target="_blank"
          className="hover:bg-[#0077b5] rounded-xl p-1"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#ffffff" }}
            size="3x"
          />
        </a>
      </RevealOnScroll>
      <RevealOnScroll className="delay-200">
        <a
          href="https://github.com/quinnhipp"
          target="_blank"
          className="hover:bg-[#2b3137] rounded-xl p-1"
        >
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#ffffff" }}
            size="3x"
          />
        </a>
      </RevealOnScroll>
      <RevealOnScroll>
        <a
          href="https://twitter.com/QuinnfortheWin0"
          target="_blank"
          className="hover:bg-[#22303c] rounded-xl p-1 delay-700"
        >
          <FontAwesomeIcon
            icon={faXTwitter}
            style={{ color: "#ffffff" }}
            size="3x"
          />
        </a>
      </RevealOnScroll>
    </div>
  );
};
export default Socials;
