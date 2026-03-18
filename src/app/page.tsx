import DisclaimerBanner from '@/components/DisclaimerBanner';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import NewsSection from '@/components/NewsSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ChartSection from '@/components/ChartSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col">
      <DisclaimerBanner />
      <NavBar />
      <HeroSection />
      <NewsSection />
      <AboutSection />
      <StatsSection />
      <ChartSection />
      <Footer />
    </div>
  );
}
