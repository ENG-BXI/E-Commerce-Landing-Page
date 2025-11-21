import Header from './_Components/Header';
import HeroSection from './_Components/HeroSection';
import StatisticsSection from './_Components/StatisticsSection';
import WhyUsSection from './_Components/WhyUsSection';
import BannerSection from './_Components/BannerSection';
import SubscriptionSection from './_Components/SubscriptionSection';
import ProductsSection from './_Components/ProductsSection';

export default function Page() {
  return (
    <main className='container mx-auto'>
      <Header />
      <HeroSection />
      <StatisticsSection />
      <ProductsSection />
      <WhyUsSection />
      <BannerSection />
      <SubscriptionSection />
    </main>
  );
}









