import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { motion } from "framer-motion";
import { mappedSkills } from '@/constants/mapping';

function Skills() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      id="#skills"
      className="flex min-h-[70vh] flex-col items-center justify-center gap-16 md:gap-32"
    >
      <h2 className="text-4xl font-light text-white">Technical Skillset</h2>
      <div className="flex flex-wrap  w-[50%] items-center justify-center gap-20 p-5">
			  {mappedSkills.map((skill) => (
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            key={skill.name}
						className='flex flex-col items-center justify-center'
          >
            <div className="cursor-pointer text-[60px] transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[60px]">
              {skill.icon}
            </div>
            <span className='text-white py-3'>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
