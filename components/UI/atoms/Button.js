import React from 'react';

const Button = ({ children, primary, ghost }) => {
  return (
    <button
      className={`p-2 rounded-lg ${
        primary
          ? 'bg-accent-01 text-primary-01 hover:bg-btn-primary-hover'
          : ghost
          ? 'bg-none text-white border border-white hover:border-opacity-50'
          : 'bg-btn-default text-white hover:bg-btn-default-hover'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
