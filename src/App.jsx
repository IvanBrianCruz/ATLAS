import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroJS from './components/IntroJS';
import IntroCSS from './components/IntroCSS';
import IntroHTML from './components/IntroHTML';
import Home from './components/Home';
import Herramientas from './components/Herramientas';
import 'bootstrap/dist/css/bootstrap.min.css';
// index.jsx o App.jsx
import './index.css';



function App() {
  const [currentTab, setCurrentTab] = useState('Home');

  const renderContent = () => {
    switch (currentTab) {
      case 'Home':
        return <Home />;
      case 'introJS':
        return <IntroJS />;
      case 'introCSS':
        return <IntroCSS />;
      case 'introHTML':
        return <IntroHTML />;
      case 'Herramientas': // Debe ir antes del default
        return <Herramientas />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header setCurrentTab={setCurrentTab} />
      <main>{renderContent()}</main>
      <Footer />
    </div>
  );
}

export default App;
