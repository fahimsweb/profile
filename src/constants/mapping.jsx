import {
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaGitAlt,
  FaAngular,
  FaVuejs,
  FaAws,
  FaDocker,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiTypescript, SiNativescript, SiMui } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";
import { TbPlaceholder } from "react-icons/tb";

import PROFILE from "@/constants/profile.json";

// A mapping of skills to their respective icons
// Extend new skills by importing the corresponding icon from react-icons
const skillIconMap = {
  react: <FaReact className="text-sky-500" />,
  angular: <FaAngular className="text-red-700" />,
  html: <FaHtml5 className="text-orange-500" />,
  vuejs: <FaVuejs className="text-pink-500" />,
  typescript: <SiTypescript className="text-green-500" />,
  nodejs: <FaNodeJs className="text-yellow-500" />,
  graphql: <GrGraphQl className="text-fuchsia-500" />,
  nextjs: <RiNextjsFill className="text-gray-300" />,
  reactnative: <SiNativescript className="text-purple-500" />,
  css: <FaCss3 className="text-teal-400" />,
  javascript: <IoLogoJavascript className="text-cyan-400" />,
  bootstrap: <BsBootstrapFill className="text-purple-600" />,
  materialui: <SiMui className="text-red-200" />,
  aws: <FaAws className="text-orange-600" />,
  docker: <FaDocker className="text-sky-300" />,
  git: <FaGitAlt className="text-red-600" />,
  java: <FaJava className="text-blue-400" />,
  expressjs: <FaNodeJs className="text-green-400" />,
  python: <FaPython className="text-yellow-400" />,
};

// Map the skills to their icons
export const mappedSkills = PROFILE.skills.map((skill) => {
  const skillName = skill.replace(/\s/g, "").toLowerCase();
  return {
    name: skill,
    icon: skillIconMap[skillName] || (
      <TbPlaceholder className="text-yellow-300" />
    ), // Fallback to Placeholder Icon if no icon is found
  };
});
