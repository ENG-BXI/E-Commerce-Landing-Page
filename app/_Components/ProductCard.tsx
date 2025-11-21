import Image from 'next/image';
import ViewProductButton from './ViewProductButton';
import {Product} from './ProductsSection';

function ProductCard({product}: {product: Product}) {
  return (
    <section className='rounded-[30px] min-w-90 bg-[#F3F3F3] p-4 relative'>
      {/* Image */}
      <div className='relative mb-6 h-56 w-full overflow-hidden rounded-[26px]'>
        <Image src={product.image} alt={product.title} fill className='object-contain' />
      </div>
      {/* Title and Price */}
      <div className='flex items-center justify-between '>
        <div className='flex  items-center justify-between gap-x-8'>
          <h3 className='text-lg font-semibold text-gray-600'>{product.title}</h3>
          <p className='text-base font-bold'>{product.price}</p>
        </div>
        <ViewProductButton />
      </div>
    </section>
  );
}

export default ProductCard;
