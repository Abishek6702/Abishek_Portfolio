import React from "react";
import profilepic from "../assets/profpic1.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import {
  DiCss3,
  DiGithub,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { SiFigma, SiWordpress } from "react-icons/si";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "Fullstack Developer",
                        1000,
                        "Webdesigner",
                        1000,
                        "Manual Tester",
                        1000,
                        "UI/UX Designer",
                        1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
                />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    HEY, I AM <br/>
                    <span className="text-purple-500">ABISHEK</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    I am a passionate fullstack developer with 1 years of experience.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                <motion.a 
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                    className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl" 
                    href="https://drive.google.com/drive/folders/1zr8wDzREJN1MEX-x2SzxgTPECrRQTcLG?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Download CV
                </motion.a>


                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Abishek6702">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/abishek-k-68a9a3198/">
                            <AiOutlineLinkedin/>
                        </motion.a>

                        <motion.a whileHover={{scale:1.2}}href="mailto:abishekkrishnat@gmail.com">
                            <AiOutlineMail/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>


            <motion.img 
                src={profilepic}
                className="w-[300px] md:w-[370px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <p className="text-gray-200 mr-6">My Tech Stack</p>
            
            <DiReact className="text-blue-500 mx-2 text-[54px]" />
<DiNodejsSmall className="text-green-500 mx-2 text-[54px]" />
<DiMongodb className="text-orange-600 mx-2 text-[54px]" />
<DiMysql className="text-blue-600 mx-2 text-[54px]" />
<SiFigma className="text-yellow-500 mx-2 text-[44px]" />
<SiWordpress className="text-blue-500 mx-2 text-[44px]" />

        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
        
    </div>
  )
}

export default Hero