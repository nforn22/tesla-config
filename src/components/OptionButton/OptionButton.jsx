import React from 'react';

const OptionButton = ({ label, price, selected, onClick }) => {
  return (
    <button
      className={`option-btn ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {label} — ${price}
    </button>
  );
};

export default OptionButton;

