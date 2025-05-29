import React from 'react';

const TotalAmount = ({ amount }) => {
  return (
    <div className="total-amount">
      Total: <strong>${amount}</strong>
    </div>
  );
};

export default TotalAmount;
