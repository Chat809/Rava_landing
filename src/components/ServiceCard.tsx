import React from "react";

interface ServiceCardPropos {
    imgCard: string;
    alt: string;
    serviceName: string;
}

const ServiceCard: React.FC<ServiceCardPropos> = ({imgCard, serviceName, alt}) =>{
    return(
      <div className="box-card-services">
        <img className="img-card-services" src={imgCard} alt={alt} />
        <div className="project-card-name poppins">{serviceName}</div>
      </div>
    );
};

export default ServiceCard;