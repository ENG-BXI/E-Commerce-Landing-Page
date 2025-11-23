import {LOGO, Search_Icon, Cart_Icon, Profile_Icon} from '@/app/_Assets';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import {useRef} from 'react';

function Header() {
  const container = useRef(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const icons = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(container.current, {width: 'auto', duration: 1, paddingLeft: '20px', paddingRight: '20px'});
      tl.to(logoRef.current, {
        y: 0,
        opacity: 100,
        duration: 0.5
      });
      tl.to(navRef.current!.querySelectorAll('ul li'), {
        y: 0,
        opacity: 100,
        duration: 0.7,
        stagger: 0.3
      });
      tl.to(
        icons.current!.querySelectorAll('img'),
        {
          y: 0,
          opacity: 100,
          duration: 0.7,
          stagger: 0.3
        },
        '-=0.5'
      );
    },
    {scope: container}
  );
  return (
    <header ref={container} className='flex w-0 mx-auto overflow-hidden sticky top-5  z-50 bg-white justify-between items-center my-5 py-2  rounded-3xl shadow-2xl'>
      <Image ref={logoRef} className='-translate-y-20 opacity-0' src={LOGO} alt='Logo Image' />
      <nav ref={navRef}>
        <ul className='flex justify-center items-center gap-x-3'>
          <li className='cursor-pointer -translate-y-20 opacity-0'>Product</li>
          <li className='cursor-pointer -translate-y-20 opacity-0'>About Us</li>
          <li className='cursor-pointer -translate-y-20 opacity-0'>Our Store</li>
          <li className='cursor-pointer -translate-y-20 opacity-0'>Delivery</li>
        </ul>
      </nav>
      <div ref={icons} className='flex items-center gap-x-3'>
        <Image className='-translate-y-20 opacity-0' width={20} src={Search_Icon} alt='Search_Icon' />
        <Image className='-translate-y-20 opacity-0' width={20} src={Cart_Icon} alt='Cart_Icon' />
        <Image className='-translate-y-20 opacity-0' width={20} src={Profile_Icon} alt='Profile_Icon' />
      </div>
    </header>
  );
}

export default Header;
