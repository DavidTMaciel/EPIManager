import React from 'react';
import './style.css'

function SuccessNotification({ message }) {
  return (
    <div className="success-notification">
      <p>{message}</p>
    </div>
  );
}

export default SuccessNotification;
