import HeroSection from './components/HeroSection';
import Header from './components/Header';
import HowItWorksSection from './components/HowItWorksSection';
import RestaurantSection from './components/RestaurantSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <RestaurantSection />
    </main>
  );
}
