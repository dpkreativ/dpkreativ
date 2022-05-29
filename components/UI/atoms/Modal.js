import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, className, show = true }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Modal Content
  const modalContent = show ? (
    <div className={`p-5 absolute w-full max-w-lg ${className}`}>
      {children}
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;
