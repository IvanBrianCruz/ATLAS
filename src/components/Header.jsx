import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample({ setCurrentTab }) {
  const logoStyle = {
    width: '150px',
    height: 'auto',
    filter: 'drop-shadow(0 0 15px red)',
    animation: 'cambioColores 5s infinite',
    cursor: 'pointer',

  };
  const menu = {
    padding: '1.5rem 4rem' 
  };
  const opfinal = {

    color: 'white'
  };
  const navbarStyle = {
    backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/baner.png)', // URL de la imagen de fondo
    backgroundSize: 'cover', // Ajusta la imagen para cubrir el área del navbar
    backgroundPosition: 'center', // Centra la imagen
    backgroundRepeat: 'no-repeat', // Evita que la imagen se repita

  };

  const keyframes = `
    @keyframes cambioColores {
      0% { filter: drop-shadow(0 0 15px red); }
      25% { filter: drop-shadow(0 0 15px blue); }
      50% { filter: drop-shadow(0 0 15px green); }
      75% { filter: drop-shadow(0 0 15px yellow); }
      100% { filter: drop-shadow(0 0 15px red); }
    }
  `;

  const handleLogoClick = () => {
    window.location.href = 'https://ivanbriancruz.github.io/ATLAS/', '_blank';
  };

  return (
    <>
      <style>{keyframes}</style>
      <Navbar expand="lg" style={navbarStyle}>


        <Container>
          <img
            src='https://IvanBrianCruz.github.io/ATLAS/img/atlas.png'
            alt="Logo Atlas"
            style={logoStyle}
            onClick={handleLogoClick}
          />
          <div style={menu}>
          <Navbar.Brand 
  href="https://ivanbriancruz.github.io/ATLAS/" 
  style={{
    color: 'white',        // Cambia el color del texto
    fontSize: '50px',       // Cambia el tamaño de la fuente
    fontFamily: 'Arial, sans-serif',  // Cambia la fuente
    fontWeight: 'bold',     // Ajusta el grosor de la fuente
  }}
>
  ATLAS
</Navbar.Brand>

          <br></br>
          <br></br>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav >
                <Nav.Link onClick={() => setCurrentTab('Home')} className="text-white">Home</Nav.Link>
                <Nav.Link onClick={() => setCurrentTab('introJS')} className="text-white">Introducción a JavaScript</Nav.Link>
                <Nav.Link onClick={() => setCurrentTab('introHTML')} className="text-white">Introducción a HTML</Nav.Link>
                <Nav.Link onClick={() => setCurrentTab('introCSS')} className="text-white">Introducción a CSS</Nav.Link>
                

                <div style={logoStyle}> {/* Envuelve NavDropdown en un div blanco */}
                  <NavDropdown title="Complementos" id="basic-nav-dropdown" style={opfinal}>
                    <NavDropdown.Item href="#action/3.1">Evaluación</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">presentacion </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => setCurrentTab('Herramientas')}>Herramientas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">material</NavDropdown.Item>
                  </NavDropdown>
                </div>

              </Nav>
            </Navbar.Collapse>
          </div>

        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
