import {Right_Arrow_Icon} from '@/app/_Assets';
import Image from 'next/image';

function ViewProductButton() {
  return (
    <div className='bg-white flex justify-end items-end w-17 h-17 rounded-tl-2xl absolute bottom-0 right-0'>
      <button className='h-13 w-13 rounded-full bg-black text-white'>
        <div className='flex h-full text-white! w-full items-center justify-center'>
          <Image src={Right_Arrow_Icon} alt='Arrow icon' />
        </div>
      </button>
    </div>
  );
}

export default ViewProductButton;
