/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import Applications from './components/Applications';
import Products from './components/Products';
import Certifications from './components/Certifications';
import VideoShowcase from './components/VideoShowcase';
import MidCTA from './components/MidCTA';
import FactoryBlock from './components/FactoryBlock';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Banner from './components/Banner';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Products />
        <Certifications />
        <VideoShowcase />
        <Benefits />
        <Applications />
        <MidCTA />
        <FactoryBlock />
        <FAQ />
        <FinalCTA />
        <Banner />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
