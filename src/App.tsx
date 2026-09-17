import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ProblemSection } from './components/ProblemSection';
import { Services } from './components/Services';
import { Results } from './components/Results';
import { AboutCoach } from './components/AboutCoach';
import { MethodSection } from './components/MethodSection';
import { FeaturedVideos } from './components/FeaturedVideos';
import { LeadMagnet } from './components/LeadMagnet';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="grain min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSection />
        <Services />
        <MethodSection />
        <Results />
        <AboutCoach />
        <FeaturedVideos />
        <LeadMagnet />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
