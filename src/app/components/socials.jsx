"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFileArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import RevealOnScroll from "./revealOnScroll";
import Link from "next/link";

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
          <RevealOnScroll>
            <FontAwesomeIcon
              icon={faFileArrowDown}
              style={{ color: "#ffffff" }}
              size="3x"
            />
          </RevealOnScroll>
        </a>
      </div>
    </div>
  );
};
DownloadResume;

export const ButtonMailto = ({ mailto }) => {
  return (
    <Link
      href="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      <div
        target="_blank"
        className="hover:bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] rounded-xl p-1"
      >
        <RevealOnScroll>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#ffffff" }}
            size="3x"
          />
        </RevealOnScroll>
      </div>
    </Link>
  );
};
ButtonMailto;

export const ContactMe = () => {
  return (
    <div>
      <div className="font-bold text-lg text-center bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy animate-bounce">
        CONTACT ME!
      </div>
      <div className="flex gap-x-3 mt-3 md:mt-8 justify-center">
        <ButtonMailto mailto="mailto:quinnhipp1@gmail.com" />
      </div>
    </div>
  );
};
ContactMe;

const Socials = () => {
  return (
    <div>
      <div className="font-bold text-lg text-center bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent animate-gradient-xy animate-bounce">
        CHECK OUT MY SOCIALS!
      </div>
      <div className="flex gap-x-3 mt-3 md:mt-8 justify-center">
        <a
          href="https://www.linkedin.com/in/quinnlanhipp/"
          target="_blank"
          className="hover:bg-[#0077b5] rounded-xl p-1"
        >
          <RevealOnScroll>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#ffffff" }}
              size="3x"
            />
          </RevealOnScroll>
        </a>
        <a
          href="https://github.com/quinnhipp"
          target="_blank"
          className="hover:bg-[#2b3137] rounded-xl p-1"
        >
          <RevealOnScroll>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#ffffff" }}
              size="3x"
            />
          </RevealOnScroll>
        </a>
        <a
          href="https://twitter.com/QuinnfortheWin0"
          target="_blank"
          className="hover:bg-[#22303c] rounded-xl p-1"
        >
          <RevealOnScroll>
            <FontAwesomeIcon
              icon={faXTwitter}
              style={{ color: "#ffffff" }}
              size="3x"
            />
          </RevealOnScroll>
        </a>
      </div>
    </div>
  );
};
export default Socials;
