import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, className }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // === MODAL CONTENT ===
  // Set up the basic layout of the modal
  const modalContent = (
    <div className={`absolute w-full max-w-lg ${className}`}>{children}</div>
  );

  // === DISPLAY MODAL ===
  // If the browser has finished loading and useEffect has run, create a modal component in the #modal-root node.
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
