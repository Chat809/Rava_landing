import React from 'react';
import landingPageImg from '../IMGS/img-landingpage.jpg';

const ServicesPortfolioContent: React.FC = () => {
  return (
    <div className="box-content-services-portfolio">
      <div className="title-content poppins">Nossos Serviços</div>
      <div className="box-cards-services">
        <div className="box-card-services">
          <img className="img-card-services" src={landingPageImg} alt="Imagem Entrega da RavaTech" />
          <div className="project-card-name poppins">Criação de Landing Page</div>
        </div>
        <div className="box-card-services">
          <img className="img-card-services" src={landingPageImg} alt="Imagem Entrega da RavaTech" />
          <div className="project-card-name poppins">Manutenção de sistemas</div>
        </div>
        <div className="box-card-services">
          <img className="img-card-services" src={landingPageImg} alt="Imagem Entrega da RavaTech" />
          <div className="project-card-name poppins">Desenvolvimento de Software</div>
        </div>
        <div className="box-card-services">
          <img className="img-card-services" src={landingPageImg} alt="Imagem Entrega da RavaTech" />
          <div className="project-card-name poppins">UX/UI</div>
        </div>
        <div className="box-card-services">
          <img className="img-card-services" src={landingPageImg} alt="Imagem Entrega da RavaTech" />
          <div className="project-card-name poppins">APIs</div>
        </div>
        <div className="box-card-services">
          <img className="img-card-services" src={landingPageImg} alt="Imagem Entrega da RavaTech" />
          <div className="project-card-name poppins">Banco de dados</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPortfolioContent;