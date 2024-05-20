import React, { useState } from 'react';

const WelcomePopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2 className='poppins'>Bem vindo!</h2>
                <p className='poppins'>Estamos felizes em ter você aqui.</p>
                <button className='button-popup' onClick={() => setIsVisible(false)}>Fechar</button>
            </div>
        </div>
    );
};

export default WelcomePopup;