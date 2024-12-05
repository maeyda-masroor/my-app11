import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import FlashSale from '@/components/FlashSale';
import S from '../components/S';
import Category from '@/components/Category';
import BestSale from '../components/BestSale';
import Ad from '@/components/Ad';
import OurProduct from '../components/OurProducts';
import NewArrival from '@/components/NewArrival';
import Features from '../components/Features';
export default function Home() {
  return (
    <div>
      <Hero/>
      <S/>
      <Category/>
      <BestSale/>
      <Ad/>
      <OurProduct/>
      <NewArrival/>
      <Features/>
      </div>
  );
}
