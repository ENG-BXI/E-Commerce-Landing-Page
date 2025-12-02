import {Images4, Images5, Images6, Images7, Images8, Images9} from '@/public/_Assets';
import {ImageProps} from 'next/image';
import ProductCard from './ProductCard';
import Badge from './Badge';
import {useGSAP} from '@gsap/react';
import {useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all';

const PRODUCT_FILTERS = ['All', 'Chair', 'Cabinet', 'Sofa', 'Bed'];

export type Product = {
  id: string;
  title: string;
  price: string;
  image: ImageProps['src'];
};

const PRODUCTS: Product[] = [
  {id: 'sofa-1', title: 'Easy Sofa', price: '$124.00', image: Images4},
  {id: 'sofa-2', title: 'Easy Sofa', price: '$124.00', image: Images5},
  {id: 'sofa-3', title: 'Easy Sofa', price: '$124.00', image: Images6},
  {id: 'sofa-4', title: 'Easy Sofa', price: '$124.00', image: Images7},
  {id: 'sofa-5', title: 'Easy Sofa', price: '$124.00', image: Images8},
  {id: 'sofa-6', title: 'Easy Sofa', price: '$124.00', image: Images9}
];

function ProductsSection() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLElement>(null);
  const header = useRef<HTMLHeadingElement>(null);
  const FilterButton = useRef<HTMLDivElement>(null);
  const products = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const headerChars = SplitText.create(header.current, {type: 'chars'});
      const tl = gsap.timeline({
        scrollTrigger: {trigger: header.current, start: 'center 70%', markers: true}
      });
      tl.set(header.current, {y: 0});
      tl.from(headerChars.chars, {
        y: 100,
        duration: 0.7,
        ease: 'power4.out',
        stagger: 0.05
      });
      tl.to(FilterButton.current!.childNodes, {duration: 0.7, y: 0, opacity: 100, stagger: {each: 0.2}}, '-=1.2');
      tl.to(
        products.current!.childNodes,
        {
          y: 0,
          opacity: 100,
          stagger: 0.5,
          duration: 2.5,
          ease: 'power4.out'
        },
        '-=1.5'
      );
    },
    {scope: container}
  );
  return (
    <section ref={container} className='my-20 rounded-[40px] px-8 py-10'>
      <div className='flex flex-col items-center gap-5 text-center overflow-hidden'>
        <h2 ref={header} className='text-4xl  -translate-y-10 will-change-[translate] font-bold text-black overflow-hidden'>
          Our Best Quality Products
        </h2>
        <div ref={FilterButton} className='flex flex-wrap items-center overflow-hidden justify-center gap-3'>
          {PRODUCT_FILTERS.map((filter, index) => (
            <Badge key={filter} isSelected={index === 0} text={filter} className='text-sm translate-y-10 opacity-0 will-change-[translate_opacity] font-semibold capitalize' />
          ))}
        </div>
      </div>

      <div ref={products} className='mt-12 flex flex-wrap justify-center gap-8'>
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
