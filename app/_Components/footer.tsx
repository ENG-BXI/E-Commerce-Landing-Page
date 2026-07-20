import {LOGO} from '@/public/_Assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  const Services = ['Furniture', 'Legal Notice', 'Data Protection'];
  const NewsLetter = ['Enter Email Address', 'Sign Up'];
  const Connect = ['Instagram', 'FaceBook', 'Twitter'];
  const Supports = ['24/7 Support', 'Terms & Conditions '];
  return (
    <footer className='w-full min-h-80 bg-black p-15 grid grid-cols-2 md:grid-cols-[250px_1fr_1fr_1fr_1fr]'>
      <Image src={LOGO} alt='Logo Image' className='backdrop-brightness-150' />
      <div className='flex flex-col'>
        <h4 className='text-white mb-2 font-bold'>Services</h4>
        {Services.map(val => (
          <a key={val} href='#'>
            {val}
          </a>
        ))}
      </div>
      <div className='flex flex-col'>
        <h4 className='text-white mb-2 font-bold'>NewsLetter</h4>
        {NewsLetter.map(val => (
          <a key={val} href='#'>
            {val}
          </a>
        ))}
      </div>
      <div className='flex flex-col'>
        <h4 className='text-white mb-2 font-bold'>Connect</h4>
        {Connect.map(val => (
          <a key={val} href='#'>
            {val}
          </a>
        ))}
      </div>
      <div className='flex flex-col'>
        <h4 className='text-white mb-2 font-bold'>Supports</h4>
        {Supports.map(val => (
          <a key={val} href='#'>
            {val}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
