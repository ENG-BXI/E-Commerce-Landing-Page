import {LOGO, Search_Icon, Cart_Icon, Profile_Icon} from '@/public/Assets';
import Image from 'next/image';

function Header() {
  return (
    <header className='flex justify-between my-5 mx-10 py-2 px-5 rounded-3xl shadow-2xl'>
      <Image src={LOGO} alt='Logo Image' />
      <nav>
        <ul className='flex justify-center items-center gap-x-3'>
          <li>Product</li>
          <li>About Us</li>
          <li>Our Store</li>
          <li>Delivery</li>
        </ul>
      </nav>
      <div className='flex items-center gap-x-3'>
        <Image width={20} src={Search_Icon} alt='Search_Icon' />
        <Image width={20} src={Cart_Icon} alt='Cart_Icon' />
        <Image width={20} src={Profile_Icon} alt='Profile_Icon' />
      </div>
    </header>
  );
}

export default Header;
