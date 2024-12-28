import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-6 md:p-20 mt-12'>
      <div className='flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0'>
        
        <div className='text-center md:text-left space-y-4'>
          <h3 className='text-2xl md:text-3xl text-gray-200 font-semibold'>Abishek.k</h3>
          <div className='flex justify-center md:justify-start gap-6 text-gray-400 text-3xl md:text-4xl'>
            <a href="https://github.com/Abishek6702"><FaGithubSquare /></a>
            <a href="https://www.linkedin.com/in/abishek-k-68a9a3198/"><FaLinkedin /></a>
            <a href="mailto:abishekkrishnat@gmail.com"><AiOutlineMail /></a>
          </div>
        </div>

        <p className='text-gray-400 text-center md:text-left'>@2024 Abishek.k</p>
        
      </div>
    </div>
  );
}

export default Footer;
