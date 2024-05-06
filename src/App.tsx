import React from 'react';
import './index.css';

import Header from './components/Header';
import HomeContent from './components/HomeContent';
import ServicesPortfolioContent from './components/ServicesPortfolioContent';
import TeamContent from './components/TeamContent';
import Footer from './components/Footer';
import Slider from './components/Slider';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HomeContent />
      <Slider />
      <ServicesPortfolioContent />
      <TeamContent />
      <Footer />
    </div>
  );
};

export default App;