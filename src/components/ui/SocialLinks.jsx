import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import PROFILE from "@/constants/profile.json";

function SocialLinks() {
  return (
    <>
      <li className="cursor-pointer text-3xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
        <a target="_blank" href={PROFILE.linkedIn}>
          <BsLinkedin />
        </a>
      </li>
      <li className="cursor-pointer text-3xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
        <a target="_blank" href={PROFILE.github}>
          <BsGithub />
        </a>
      </li>
      <li className="cursor-pointer text-3xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
        <a href={`mailto:${PROFILE.email}`}>
          <MdAttachEmail />
        </a>
      </li>
    </>
  );
}

export default SocialLinks;
