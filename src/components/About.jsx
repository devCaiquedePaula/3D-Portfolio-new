import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        📊 As an experienced Fullstack Software Engineer, with over 3 years of experience, my expertise spans TypeScript, JavaScript, React, Java, and Python. I stand out for creating innovative solutions, such as a robust authentication microservice in Python (Django), PostgreSQL, and Redis, significantly increasing operational efficiency. I reduced query response times by 40% and improved overall system efficiency by 25%. My goal is to continue enhancing my skills, especially in frontend technologies like React, to deliver even more impactful and efficient solutions.
        <br></br><br></br>
        🔎 My journey in software engineering is marked by an insatiable passion for creating exceptional digital experiences. With a background in Computer Science and a specialization in Software Engineering and Object-Oriented Programming from the prestigious universities of Harvard and Helsinki, I aim to apply my expertise to develop innovative and impactful solutions.
        <br></br><br></br>
        📖 My collaborative approach and adept communication skills have been instrumental in fostering productive team environments where innovation flourishes.
        <br></br><br></br>
        💡 Committed to continuous learning, I stay updated on the latest industry trends and technologies through online courses, workshops, and conferences. Recently, I completed a certification in advanced React development, further enhancing my expertise in frontend technologies and design patterns.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");