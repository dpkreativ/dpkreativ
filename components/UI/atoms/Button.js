import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="bg-blue-200 py-3 px-5 rounded-xl">{children}</button>
  );
};

export default Button;
