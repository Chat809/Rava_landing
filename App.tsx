import React from 'react';
import './index.css';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';
import Slider from './components/Slider';
import TeamCard from './components/TeamCard';
// @ts-ignore
import landingPageImg from './IMGS/img-landingpage.jpg';
// @ts-ignore
import khalilImg from './IMGS/img_khalil.jpeg';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HomeContent />
      <Slider />
      <div className="box-content-services-portfolio">
        <div className="title-content poppins">Nossos Serviços</div>
        <div className="box-cards-services">
          <ServiceCard imgCard={landingPageImg} alt="Imagem Entrega da RavaTech" serviceName="Criação de Landing Page" />
          <ServiceCard imgCard={landingPageImg} alt="Imagem Entrega da RavaTech" serviceName="Criação de Landing Page" />
          <ServiceCard imgCard={landingPageImg} alt="Imagem Entrega da RavaTech" serviceName="Criação de Landing Page" />
          <ServiceCard imgCard={landingPageImg} alt="Imagem Entrega da RavaTech" serviceName="Criação de Landing Page" />
          <ServiceCard imgCard={landingPageImg} alt="Imagem Entrega da RavaTech" serviceName="Criação de Landing Page" />
          <ServiceCard imgCard={landingPageImg} alt="Imagem Entrega da RavaTech" serviceName="Criação de Landing Page" />
        </div>
      </div>
      <div className='box-content-team'>
        <TeamCard avatarName="Khalil Salomão" avatarDescription="Fullstack Developer" avatarImg={khalilImg} />
        <TeamCard avatarName="Khalil Salomão" avatarDescription="Fullstack Developer" avatarImg={khalilImg} />
        <TeamCard avatarName="Khalil Salomão" avatarDescription="Fullstack Developer" avatarImg={khalilImg} />
      </div>
      <Footer />
    </div>
  );
};

export default App;