import React from 'react';
import './style.scss';

function Button({ description, onClick }) {
  return (
    <button
      type="button"
      className="button__load"
      onClick={onClick}
    >
      {description}
    </button>
  );
}

export default Button;
