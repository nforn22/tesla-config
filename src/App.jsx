import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import OptionButton from './components/OptionButton/OptionButton';
import TotalAmount from './components/TotalAmount/TotalAmount';
import BuyButton from './components/BuyButton/BuyButton';
import './App.css'


const optionsGroup1 = [
  { id: 1, label: 'Standard Battery', price: 48000 },
  { id: 2, label:'Long Range Battery', price: 64000 }
];

const optionsGroup2 = [
  { id: 3, label: 'Autopilot', price: 5000 },
  { id: 4, label: 'Full Self Driving', price: 10000 }
];

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggle = (option) => {
    if (selectedOptions.includes(option.id)) {
      setSelectedOptions(selectedOptions.filter(id => id !== option.id));
    } else {
      setSelectedOptions([...selectedOptions, option.id]);
    }
  };

  const getTotal = () => {
    const allOptions = [...optionsGroup1, ...optionsGroup2];
    return allOptions
      .filter(option => selectedOptions.includes(option.id))
      .reduce((sum, option) => sum + option.price, 0);
  };

  return (
    <>
      <div className="app">
        <Header />

        <main className="main-content">
          <h2 className="section-title">Select your configuration</h2>
          <div className="options-section">
            {optionsGroup1.map(option => (
              <OptionButton 
                key={option.id}
                label={option.label}
                price={option.price}
                selected={selectedOptions.includes(option.id)}
                onClick={() => handleToggle(option)}
              />
            ))}
          </div>

          <h2 className="section-title">Driving Assistance</h2>
          <div className="options-section">
            {optionsGroup2.map(option => (
              <OptionButton 
                key={option.id}
                label={option.label}
                price={option.price}
                selected={selectedOptions.includes(option.id)}
                onClick={() => handleToggle(option)}
              />
            ))}
          </div>

          <TotalAmount amount={getTotal()} />
          <BuyButton />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
