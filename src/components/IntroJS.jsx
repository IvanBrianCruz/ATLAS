import React from 'react';

const IntroJS = () => {
  return (
    <div style={{
      backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/fondo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-y', // Repetir el fondo solo en el eje vertical
      minHeight: '100vh', // Asegura que el div cubra toda la altura de la pantalla
      color: '#fff', // Color del texto blanco para el contraste
      padding: '2rem', // Espaciado interno
      display: 'flex', // Usar flexbox para centrar contenido
      flexDirection: 'column', // Alinear en columna
      alignItems: 'center', // Centrar horizontalmente
      justifyContent: 'center', // Centrar verticalmente
      textAlign: 'center', // Centrar texto
    }}>
      <div style={{ maxWidth: '1000px', width: '100%' }}> {/* Contenedor para limitar el ancho */}
        {/* Sección de Presentación */}
        <div style={{ marginBottom: '2rem' }}>
          <h2>🖥️ Presentación</h2>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSChASIeSASNPt1nUKN208WZj9RG0r4EbOUOGLhp2a1d0niTavXpO8NpQaBPgnARQ/embed?start=false&loop=false&delayms=60000"
            frameBorder="0"
            width="100%" // Cambiado a 100%
            height="700px"
            allowFullScreen="true"
            mozallowFullScreen="true"
            webkitAllowFullScreen="true"
          ></iframe>
        </div>

        {/* Sección de Video */}
        <div style={{ marginBottom: '2rem' }}>
          <h2>🎥 Video de Introducción</h2>
          <iframe
            width="100%" // Cambiado a 100%
            height="700px"
            src="https://www.youtube.com/embed/FuCiNVP88pc?si=7Mv87riM3cIy4xSW"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Sección de Actividad */}
        <div>
          <h2>🎮 Actividad de Lógica</h2>
          <p>Debes jugar y pasar los 3 primeros niveles del juego a continuación para desarrollar lógica de programación. ¡Envíame captura de pantalla de cada nivel pasado por email o WhatsApp!</p>
          <iframe
            src='https://www.minijuegos.com/embed/light-bot'
            style={{ width: '100%', height: '700px' }} // Cambiado a 100%
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default IntroJS;
