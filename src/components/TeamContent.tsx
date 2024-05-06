import React from 'react';
import khalilImg from '../IMGS/img_khalil.jpeg';
import instaImg from '../IMGS/img_instagram.png';
import gitImg from '../IMGS/img_github.png';
import linkedinImg from '../IMGS/img_linkedin.png';

const TeamContent: React.FC = () => {
  return (
    <div className="box-content-team">
      <div className="box-card-team">
        <div className="box-img-description-card-team">
          <img className="img-avatar-card-team" src={khalilImg} alt="Imagem de perfil Khalil Salomão" />
          <div className="name-card-team poppins">Khalil Salomão</div>
          <div className="description-card-team poppins">Fullstack Software Developer</div>
        </div>
        <div className="box-social-media-card-team">
          <a className="link-icon-card-team" href="https://www.instagram.com/khalilsallomao/"><img className="img-social-media-card-team" src={instaImg} alt="Icone Instagram" /></a>
          <a className="link-icon-card-team" href="https://github.com/Chat809"><img className="img-social-media-card-team" src={gitImg} alt="Icone Github" /></a>
          <a className="link-icon-card-team" href="https://www.linkedin.com/in/khalil-salom%C3%A3o-955b81238/"><img className="img-social-media-card-team" src={linkedinImg} alt="Icone LinkedIn" /></a>
        </div>
      </div>

      <div className="box-card-team">
        <div className="box-img-description-card-team">
          <img className="img-avatar-card-team" src={khalilImg} alt="Imagem de perfil Khalil Salomão" />
          <div className="name-card-team poppins">Khalil Salomão</div>
          <div className="description-card-team poppins">Fullstack Software Developer</div>
        </div>
        <div className="box-social-media-card-team">
          <a className="link-icon-card-team" href="https://www.instagram.com/khalilsallomao/"><img className="img-social-media-card-team" src={instaImg} alt="Icone Instagram" /></a>
          <a className="link-icon-card-team" href="https://github.com/Chat809"><img className="img-social-media-card-team" src={gitImg} alt="Icone Github" /></a>
          <a className="link-icon-card-team" href="https://www.linkedin.com/in/khalil-salom%C3%A3o-955b81238/"><img className="img-social-media-card-team" src={linkedinImg} alt="Icone LinkedIn" /></a>
        </div>
      </div>

      <div className="box-card-team">
        <div className="box-img-description-card-team">
          <img className="img-avatar-card-team" src={khalilImg} alt="Imagem de perfil Khalil Salomão" />
          <div className="name-card-team poppins">Khalil Salomão</div>
          <div className="description-card-team poppins">Fullstack Software Developer</div>
        </div>
        <div className="box-social-media-card-team">
          <a className="link-icon-card-team" href="https://www.instagram.com/khalilsallomao/"><img className="img-social-media-card-team" src={instaImg} alt="Icone Instagram" /></a>
          <a className="link-icon-card-team" href="https://github.com/Chat809"><img className="img-social-media-card-team" src={gitImg} alt="Icone Github" /></a>
          <a className="link-icon-card-team" href="https://www.linkedin.com/in/khalil-salom%C3%A3o-955b81238/"><img className="img-social-media-card-team" src={linkedinImg} alt="Icone LinkedIn" /></a>
        </div>
      </div>
    </div>
  );
};

export default TeamContent;