import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const experiences = [
  {
    company: 'Virtusa',
    period: '2023 (June) - 2024',
    description: 'Junior Full Stack Developer (Intern)',
  },
  {
    company: 'Quantum Pulse',
    period: '2024 - Present',
    description: 'React Developer and Manual Tester',
  },
];

const Experience = () => {
  return (
    <div className='p-8 max-w-[900px] mx-auto'>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 gap-8'
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className='border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
            >
              <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
              <p className='text-gray-300'>{experience.period}</p>
              <p className='text-gray-400 mt-4'>{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
