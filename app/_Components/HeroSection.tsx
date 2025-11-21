import {Images1, Right_Arrow_Icon, Images2, StarIcon, Images3} from '@/public/Assets';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className='mt-20  flex gap-y-10 flex-col items-center justify-center mb-10'>
      <h1 className='text-6xl text-black -tracking-[0.10rem] text-center text-wrap font-bold'>
        Transform Your Space With <br /> Perfect Furniture
      </h1>
      <div className='relative flex gap-x-5 '>
        {/* Hero Image And Profile Images */}
        <div className='relative w-200 h-90 overflow-hidden! rounded-4xl'>
          <Image className='object-cover w-full h-full' src={Images1} alt='HeroImage' />
          <div className='absolute rounded-br-4xl w-50 h-20 top-0 left-0 bg-white '></div>
          <div className='bg-white absolute bottom-0 right-0 h-18 w-55 rounded-tl-4xl'></div>
          <div className='bg-black h-15 w-50 flex items-center py-2 ps-10 pe-2 justify-between absolute bottom-0 right-0  rounded-full'>
            <span className='text-white text-lg'>Shop Now</span>
            <div className=' w-12 h-12 bg-white rounded-full flex justify-center items-center'>
              <Image src={Right_Arrow_Icon} alt='Right_Arrow_Icon' />
            </div>
          </div>
        </div>
        {/* Right Images */}
        <div className='flex gap-y-2 flex-col'>
          {/* Top Image */}
          <div className='flex flex-col'>
            <div className='w-50 h-35  overflow-hidden! rounded-3xl '>
              <Image className='object-cover object-[25%_75%] w-full h-full ' src={Images2} alt='image2' />
            </div>
            <div className='flex justify-between items-center p-2'>
              <div>
                <h3 className='font-bold'>Muli Chair</h3>
                <div className='flex '>
                  <Image width={20} src={StarIcon} alt='StarIcon' />
                  <Image width={20} src={StarIcon} alt='StarIcon' />
                  <Image width={20} src={StarIcon} alt='StarIcon' />
                  <Image width={20} src={StarIcon} alt='StarIcon' />
                  <Image width={20} src={StarIcon} alt='StarIcon' />
                </div>
              </div>
              <span className='font-bold'>120.00$</span>
            </div>
          </div>
          {/* Bottom Image */}
          <div className='flex flex-col'>
            <div className='w-50 h-35  overflow-hidden! rounded-3xl '>
              <Image className='object-cover object-[25%_75%] w-full h-full ' src={Images3} alt='image2' />
            </div>
            <div className='flex justify-between items-center p-2'>
              <div>
                <h3 className='font-bold'>Muli Chair</h3>
                <div className='flex '>
                  <Image width={20} src={StarIcon} alt='StarIcon' />
                  <Image width={20} src={StarIcon} alt='StarIcon' />
                  <Image width={20} src={StarIcon} alt='StarIcon' />
                  <Image width={20} src={StarIcon} alt='StarIcon' />
                  <Image width={20} src={StarIcon} alt='StarIcon' />
                </div>
              </div>
              <span className='font-bold'>120.00$</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
