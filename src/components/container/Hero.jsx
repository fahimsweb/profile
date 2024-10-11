import React from "react";
import PROFILE from "@/constants/profile.json";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center px-16 py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={PROFILE.photo}
            alt="Profile Photo"
            className="trnasition-all w-[200px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[250px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-5 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-4xl font-light text-transparent opacity-80 transition-all duration-300 md:text-5xl">
            {PROFILE.name}
          </h1>
          <h3 className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-2xl text-transparent opacity-80 transition-all duration-300 md:text-2xl">
            {PROFILE.title}
          </h3>
          <p className="text-pretty text-sm text-gray-400 md:text-base">
            {PROFILE.about}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
