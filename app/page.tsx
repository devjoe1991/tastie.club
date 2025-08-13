import HeroSection from './components/HeroSection';
import Header from './components/Header';
import HowItWorksSection from './components/HowItWorksSection';
import ExperienceGallery from './components/ExperienceGallery';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <ExperienceGallery />
    </main>
  );
}
