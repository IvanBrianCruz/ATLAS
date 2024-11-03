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
  
  const navbarStyle = {
    backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/baner.png)', // URL de la imagen de fondo
    backgroundSize: 'cover', // Ajusta la imagen para cubrir el área del navbar
    backgroundPosition: 'center', // Centra la imagen
    backgroundRepeat: 'no-repeat' // Evita que la imagen se repita
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
          <Navbar.Brand href="https://ivanbriancruz.github.io/ATLAS/" className="text-white">  ATLAS  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setCurrentTab('Home')} className="text-white">Home</Nav.Link>
              <Nav.Link onClick={() => setCurrentTab('introJS')} className="text-white">Introducción a JavaScript</Nav.Link>
              <Nav.Link onClick={() => setCurrentTab('introCSS')} className="text-white">Introducción a CSS</Nav.Link>
              <Nav.Link onClick={() => setCurrentTab('introHTML')} className="text-white">Introducción a HTML</Nav.Link>
              
              <div style={logoStyle}> {/* Envuelve NavDropdown en un div blanco */}
                  <NavDropdown title="Complementos" id="basic-nav-dropdown" >
                  <NavDropdown.Item href="#action/3.1">Clase 4</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Clase 5</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Clase 6</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">material</NavDropdown.Item>
                </NavDropdown>
              </div>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;