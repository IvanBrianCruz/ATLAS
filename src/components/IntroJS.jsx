import React from 'react';

const IntroJS = () => {
  return (
    <div style={{
      backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/fondo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-y',
      minHeight: '100vh',
      color: '#fff',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '1000px', width: '100%' }}>
        
        {/* Sección de Presentación */}
        <div style={{ marginBottom: '2rem', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '1rem', borderRadius: '8px' }}>
          <h2 style={{ marginBottom: '1rem', color: '#f0f0f0' }}>🖥️ Presentación</h2>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSChASIeSASNPt1nUKN208WZj9RG0r4EbOUOGLhp2a1d0niTavXpO8NpQaBPgnARQ/embed?start=false&loop=false&delayms=60000"
            frameBorder="0"
            width="100%"
            height="700px"
            allowFullScreen="true"
            mozallowFullScreen="true"
            webkitAllowFullScreen="true"
            style={{ borderRadius: '8px' }}
          ></iframe>
        </div>

        {/* Sección de Video */}
        <div style={{ marginBottom: '2rem', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '1rem', borderRadius: '8px' }}>
          <h2 style={{ marginBottom: '1rem', color: '#f0f0f0' }}>🎥 Video de Introducción</h2>
          <iframe
            width="100%"
            height="700px"
            src="https://www.youtube.com/embed/FuCiNVP88pc?si=7Mv87riM3cIy4xSW"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ borderRadius: '8px' }}
          ></iframe>
        </div>

        {/* Sección de Actividad */}
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '1rem', borderRadius: '8px' }}>
          <h2 style={{ marginBottom: '1rem', color: '#f0f0f0' }}>🎮 Actividad de Lógica</h2>
          <p style={{ marginBottom: '1rem' }}>
            Debes jugar y pasar los 3 primeros niveles del juego a continuación para desarrollar lógica de programación.
            ¡Envíame captura de pantalla de cada nivel pasado por email o WhatsApp!
          </p>
          <iframe
            src='https://www.minijuegos.com/embed/light-bot'
            style={{ width: '100%', height: '700px', borderRadius: '8px' }}
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default IntroJS;
