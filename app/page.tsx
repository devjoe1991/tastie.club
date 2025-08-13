import HeroSection from './components/HeroSection';
import Header from './components/Header';
import HowItWorksSection from './components/HowItWorksSection';
import RestaurantSection from './components/RestaurantSection';
import GallerySection from './components/GallerySection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <RestaurantSection />
      <GallerySection />
    </main>
  );
}
