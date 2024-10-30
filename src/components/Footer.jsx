import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Recursos</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Documentación de JavaScript</a></li>
              <li><a href="#" className="text-white">Documentación de CSS</a></li>
              <li><a href="#" className="text-white">Documentación de HTML</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Sobre Nosotros</h5>
            <p>Este sitio fue creado como una introducción al mundo del desarrollo web, proporcionando recursos para principiantes.</p>
          </Col>
          <Col md={4}>
            <h5>Contactanos</h5>
            <p>Email: info@webintro.com</p>
            <p>Tel: +123 456 789</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2024 Web Intro. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
