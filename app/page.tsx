import HeroSection from './components/HeroSection';
import Header from './components/Header';
import HowItWorksSection from './components/HowItWorksSection';
import RestaurantSection from './components/RestaurantSection';
import GallerySection from './components/GallerySection';

export default function Home() {
  return (
    <main className="min-h-screen overscroll-none">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <RestaurantSection />
      <GallerySection />
    </main>
  );
}
