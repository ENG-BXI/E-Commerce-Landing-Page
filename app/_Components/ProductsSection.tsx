import {Images4, Images5, Images6, Images7, Images8, Images9} from '@/app/Assets';
import {ImageProps} from 'next/image';
import ProductCard from './ProductCard';
import Badge from './Badge';

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
  return (
    <section className='my-20 rounded-[40px] px-8 py-10'>
      <div className='flex flex-col items-center gap-5 text-center'>
        <h2 className='text-4xl font-bold text-black'>Our Best Quality Products</h2>
        <div className='flex flex-wrap items-center justify-center gap-3'>
          {PRODUCT_FILTERS.map((filter, index) => (
            <Badge key={filter} isSelected={index === 0} text={filter} className='text-sm font-semibold capitalize' />
          ))}
        </div>
      </div>

      <div className='mt-12 flex flex-wrap justify-center gap-8'>
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
