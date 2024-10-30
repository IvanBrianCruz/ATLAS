import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroJS from './components/IntroJS';
import IntroCSS from './components/IntroCSS';
import IntroHTML from './components/IntroHTML';
import 'bootstrap/dist/css/bootstrap.min.css';
// index.jsx o App.jsx
import './index.css';



function App() {
  const [currentTab, setCurrentTab] = useState('introJS');

  const renderContent = () => {
    switch (currentTab) {
      case 'introJS':
        return <IntroJS />;
      case 'introCSS':
        return <IntroCSS />;
      case 'introHTML':
        return <IntroHTML />;
      default:
        return <IntroJS />;
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
