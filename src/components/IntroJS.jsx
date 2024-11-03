import React from 'react';

const IntroJS = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Explicación de nuestro servidor en Express</h1>

      {/* Explicación: Importar Express */}
      <section style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        <h2>📥 1. Importar Express</h2>
        <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          <code>const express = require('express');</code>
        </pre>
        <p>
          Aquí estamos diciendo que necesitamos el módulo de <b>Express</b> para crear nuestro servidor. Express es una herramienta que facilita la creación de servidores en JavaScript.
        </p>
      </section>

      {/* Explicación: Configurar el servidor */}
      <section style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        <h2>🖥️ 2. Crear el servidor con Express</h2>
        <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          <code>const app = express();</code>
        </pre>
        <p>
          Con esta línea estamos creando nuestro servidor. Usamos <code>express()</code> como una función que configura una "aplicación de servidor", que aquí llamamos <code>app</code>.
        </p>
      </section>

      {/* Explicación: Puerto del servidor */}
      <section style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        <h2>🌐 3. Definir el puerto del servidor</h2>
        <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          <code>const PORT = 3000;</code>
        </pre>
        <p>
          <code>PORT</code> representa el puerto en el que nuestro servidor estará funcionando. Aquí, elegimos el número <b>3000</b> como nuestra "puerta" de conexión. Cuando queramos ver nuestra web, escribiremos <code>localhost:3000</code>.
        </p>
      </section>

      {/* Explicación: Servir archivos estáticos */}
      <section style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        <h2>📂 4. Servir archivos estáticos (CSS y JS)</h2>
        <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          <code>app.use(express.static(__dirname));</code>
        </pre>
        <p>
          Con <code>app.use</code>, decimos a nuestro servidor que "sirva" o muestre archivos estáticos, como el CSS y JavaScript que hacen que la web se vea y funcione bien. <code>__dirname</code> significa la carpeta actual donde está nuestro archivo.
        </p>
      </section>

      {/* Explicación: Ruta principal */}
      <section style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        <h2>🏠 5. Crear la ruta principal</h2>
        <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          <code>app.get('/', (req, res) =&gt; &#123; res.sendFile(__dirname + '/index.html'); &#125;);</code>
        </pre>
        <p>
          Aquí configuramos la <b>página de inicio</b> de nuestra web. Usamos <code>app.get</code> para indicar que esta página aparecerá cuando alguien visite nuestra web. La función <code>res.sendFile</code> envía el archivo <code>index.html</code> como respuesta, mostrándolo en el navegador.
        </p>
      </section>

      {/* Explicación: Página de error 404 */}
      <section style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        <h2>🚫 6. Crear una página de error 404</h2>
        <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          <code>app.use((req, res) =&gt; &#123; res.status(404).send('&lt;h1&gt;404 - Página no encontrada&lt;/h1&gt;'); &#125;);</code>
        </pre>
        <p>
          Esta parte configura un <b>mensaje de error</b> cuando alguien intenta visitar una página que no existe en nuestro sitio. <code>res.status(404)</code> indica un error "404", que significa que la página no fue encontrada. Luego, <code>send</code> muestra el mensaje "404 - Página no encontrada".
        </p>
      </section>

      {/* Explicación: Iniciar el servidor */}
      <section style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        <h2>🚀 7. Iniciar el servidor</h2>
        <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          <code>app.listen(PORT, () =&gt; &#123; console.log(`Servidor corriendo en http://localhost:${PORT}`); &#125;);</code>
        </pre>
        <p>
          Finalmente, <code>app.listen</code> activa el servidor en el puerto que hemos definido (3000). La función <code>console.log</code> muestra un mensaje en la consola, indicando que el servidor está funcionando y listo para recibir solicitudes.
        </p>
      </section>
    </div>
  );
};

export default IntroJS;
