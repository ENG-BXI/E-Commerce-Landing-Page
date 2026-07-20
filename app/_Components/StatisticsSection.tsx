'use client';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import {useRef} from 'react';

function StatisticsSection() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(container.current!.querySelectorAll('div'), {
        y: 100,
        opacity: 0,
        stagger: {
          each: 0.15
        },
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          end: 'bottom bottom'
        }
      });
    },
    {scope: container}
  );
  return (
    <div ref={container} className='flex justify-evenly overflow-hidden'>
      <div className='flex  flex-col items-center w-50 '>
        <h3 className='text-5xl font-bold text-black '>18K+</h3>
        <p>Happy and Lovely</p>
      </div>
      <div className='flex flex-col items-center w-50 '>
        <h3 className='text-5xl font-bold text-black '>700</h3>
        <p>Happy and Lovely</p>
      </div>
      <div className='flex flex-col items-center w-50 '>
        <h3 className='text-5xl font-bold text-black '>85%</h3>
        <p>Happy and Lovely</p>
      </div>
    </div>
  );
}

export default StatisticsSection;
