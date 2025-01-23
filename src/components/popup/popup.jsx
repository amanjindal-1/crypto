/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Popup = ({ isOpen, setIsOpen, component }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closePopup = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          {component}
        </div>
      )}
    </>
  );
};

export default Popup;
