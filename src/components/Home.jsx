import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Sección de bienvenida */}
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>¡Bienvenidos a mi curso de Programación!</h1>
        <p>
          En este curso aprenderemos a armar una web estática usando HTML, CSS y JavaScript básico. A continuación puedes ver el modelo del proyecto final que vamos a crear.
        </p>
        <img
          src="https://via.placeholder.com/600x300" // Reemplaza con la URL de tu imagen
          alt="Modelo del proyecto a lograr"
          style={{ width: '80%', margin: '1rem auto', borderRadius: '8px' }}
        />
      </section>

      {/* Sección de programas necesarios */}
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Programas que Necesitaremos Instalar</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '1rem 0' }}>
            <button
              onClick={() => window.open('https://code.visualstudio.com/', '_blank')}
              style={{ padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}
            >
              Visual Studio Code
            </button>
          </li>
          <li style={{ margin: '1rem 0' }}>
            <button
              onClick={() => window.open('https://nodejs.org/', '_blank')}
              style={{ padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}
            >
              Node.js
            </button>
          </li>
          <li style={{ margin: '1rem 0' }}>
            <button
              onClick={() => window.open('https://git-scm.com/', '_blank')}
              style={{ padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}
            >
              Git
            </button>
          </li>
        </ul>
      </section>

      {/* Sección de video de instalación */}
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Cómo Instalar y Configurar Todo para el Proyecto</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/6pD7_rcFrj8"
            title="Cómo instalar y configurar Visual Studio Code, Node.js y Git"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;
