import {Images11} from '@/public/_Assets';
import Image from 'next/image';

function BannerSection() {
  return (
    <section className='relative p-10 flex flex-col justify-center h-90 my-15 max-w-250 mx-auto'>
      <div className='absolute top-0 left-0 -z-10 w-full h-full'>
        <Image className='w-full h-full object-cover  rounded-3xl' src={Images11} alt='Banner Image' />
      </div>
      <div className='w-110 flex flex-col items-start gap-y-5'>
        <h2 className='capitalize text-4xl font-bold text-white'>when we create furniture, We Strive For the finest quality</h2>
        <button className='bg-white rounded-3xl px-3 py-2 font-bold'>See Products</button>
      </div>
    </section>
  );
}

export default BannerSection;
