import {Images10, Play_Icon} from '@/public/_Assets';
import Image from 'next/image';
import AccordionDemo from './AccordionDemo';

function WhyUsSection() {
  return (
    <section className='flex mx-auto  justify-between max-w-250'>
      <div className='flex flex-col gap-3'>
        <div className='w-120 relative'>
          <Image className='object-contain rounded-2xl w-full h-full' src={Images10} alt='Why Us Image' />

          <div className='bg-white flex justify-end items-end w-17 h-17 rounded-tl-2xl absolute bottom-0 right-0'>
            <button className='h-13 w-13 rounded-full bg-black text-white'>
              <div className='flex h-full text-white! w-full items-center justify-center'>
                <Image src={Play_Icon} className='w-3 ms-1' alt='Arrow icon' />
              </div>
            </button>
          </div>
        </div>
        <h3 className='font-bold'>
          Watch the video and learn more <br /> about ,ModNest
        </h3>
      </div>
      <div className='max-w-100'>
        <div className='w-100'>
          <h2 className='text-4xl font-bold mb-3'>Why Choose Us</h2>
          <p className=''>how are the Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, praesentium.</p>
        </div>
        <AccordionDemo />
      </div>
    </section>
  );
}

export default WhyUsSection;
