import React from 'react';
import './index.css';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';
import TeamCard from './components/TeamCard';
import WelcomePopup from './components/WelcomePopUp';
// @ts-ignore
import landingPageImg from './IMGS/img-landingpage.jpg';
// @ts-ignore
import khalilImg from './IMGS/img_khalil.jpeg';
import FAQCard from './components/FAQCard';

const App: React.FC = () => {
  return (
    <div>
      <Header />   
      <WelcomePopup />
      <HomeContent />
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
      <div className='title-content alegreya'>Desenvolvedores</div>
      <div className='box-cards-team'>
        <TeamCard avatarName="Khalil Salomão" avatarDescription="Fullstack Developer" avatarImg={khalilImg} />
        <TeamCard avatarName="Khalil Salomão" avatarDescription="Fullstack Developer" avatarImg={khalilImg} />
        <TeamCard avatarName="Khalil Salomão" avatarDescription="Fullstack Developer" avatarImg={khalilImg} />
      </div>
      </div>
      <div className='box-content-FAQs'>
        <div className='title-content alegreya'>Dúvidas?</div>
        <div className='box-cards-FAQs'>
          <FAQCard name='Qual garantia a ravatech oferece?' description='Nós oferecemos via multa prevista no contrato, além da entrega gratuita do que for desenvolvido até então' />
          <FAQCard name='Como funciona o aluguel de sites?' description='Nosso serviço de aluguel de sites permite que você utilize um site profissional sem a necessidade de ivestir em um próprio. Você paga uma taxa mensal e nós adaptamos de acordo com sua necessidade' />
          <FAQCard name='Qual o prazo estimado da entrega?' description='O prazo estimado de entrega varia de acordo com o serviço contratado e a complexidade do projeto. Para landing pages, de modo geral entregamos em até uma semana.' />
          <FAQCard name='Quais as formas de pagamento?' description='Aceitamos várias formas de pagamento, incluindo cartão de crédito, transferência bancária e PayPal. Entre em contato conosco para mais informações sobre formas de pagamento disponíveis.' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;