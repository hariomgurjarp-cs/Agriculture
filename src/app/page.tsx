import { About } from '@/components/sections/about';
import { Hero } from '@/components/sections/hero';
import { ProductCategories } from '@/components/sections/product-categories';
import { Testimonials } from '@/components/sections/testimonials';
import { WhyUs } from '@/components/sections/why-us';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <ProductCategories />
      <WhyUs />
      <Testimonials />
      <About />
    </main>
  );
}
