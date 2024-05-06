import React from 'react';
import instaImg from '../IMGS/img_instagram.png';
import gitImg from '../IMGS/img_github.png';
import linkedinImg from '../IMGS/img_linkedin.png';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-list">
          <h4 className="poppins">Informações de contato</h4>
          <a href="https://api.whatsapp.com/send?phone=5598970180787&text=Quero%20fazer%20um%20or%C3%A7amento"><p className="poppins">Orçamento via Whatsapp</p></a>
          <p className="poppins">(98) 97018-0787</p>
          <p className="poppins">ravatech@gmail.com</p>
        </div>
        <div className="footer-list">
          <h4 className="poppins">Links úteis</h4>
          <p className="poppins">Sobre nós</p>
          <p className="poppins">Termos de serviço</p>
          <p className="poppins">Política de privacidade</p>
        </div>
        <div className="footer-list">
          <h4 className="poppins">Siga-nos</h4>
          <div className="icon-social-medias-footer">
            <a href="https://www.instagram.com/khalilsallomao/"><img className="img-social-media-footer" src={instaImg} alt="Ícone Instagram" /></a>
            <a href="#"><img className="img-social-media-footer" src={linkedinImg} alt="Ícone LinkedIn" /></a>
            <a href="https://github.com/Chat809"><img className="img-social-media-footer" src={gitImg} alt="Ícone GitHub" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;