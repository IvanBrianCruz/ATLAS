import React from 'react';

function IntroCSS() {
  return (
    <div style={{
      backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/fondo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      color: '#fff',
      padding: '2rem'
    }}>
      
      {/* Sección de Video Explicativo */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '10px',
        margin: '1rem auto',
        maxWidth: '900px',
      }}>
        <h2>🎥 Video Explicativo de CSS</h2>
        <iframe 
          width="100%" 
          height="500px" 
          src="https://www.youtube.com/embed/3yM5uXp-T_0?si=P9J_cZdo_ux1MRJ1" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </section>

      {/* Sección de Presentaciones de Google */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '10px',
        margin: '1rem auto',
        maxWidth: '900px',
      }}>
        <h2>📊 Presentaciones de Google</h2>
        <p>Explora las presentaciones para entender los conceptos clave de CSS:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <iframe 
            src="https://docs.google.com/presentation/d/e/2PACX-1vTJi3mExpecMLIr1_ZGevjkd67uFZovcmi01rEe8Q6huVviyAA-ket3nuOf19ISvTKfBX7cVpOwd7zQ/embed?start=false&loop=false&delayms=60000" 
            frameBorder="0" 
            width="100%" 
            height="600" 
            allowFullScreen
          ></iframe>
          <iframe 
            src="https://docs.google.com/presentation/d/e/2PACX-1vRe6ERyZpHHPXbCI575Wza3x07odvdw0bgUcH-mK-_NOkvNi10LvXWs0X3JoNhpVA/embed?start=false&loop=false&delayms=60000" 
            frameBorder="0" 
            width="100%" 
            height="600" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Sección de Quizizz */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '10px',
        margin: '1rem auto',
        maxWidth: '900px',
      }}>
        <h2>📝 Quiz: ¡Pon a prueba tus conocimientos!</h2>
        <p>Responde este quiz para evaluar lo aprendido sobre CSS.</p>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', minHeight: '635px' }}>
          <iframe 
            src="https://quizizz.com/embed/quiz/6728ca336ba3ceac6471d56f" 
            title="CSS Quiz" 
            style={{ flex: 1 }} 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
          <a href="https://quizizz.com/admin?source=embedFrame" target="_blank" style={{ color: '#fff', textDecoration: 'underline' }}>
            Explora más en Quizizz
          </a>
        </div>
      </section>
      
    </div>
  );
}

export default IntroCSS;
