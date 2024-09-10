import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-lg md:max-w-xl relative text-black"> {/* Adjusted width */}
        {/* Title above the content */}
        <h2 className="text-xl font-bold mb-4 text-center text-black">Search Results</h2>
        {/* Close button inside the modal */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          Close
        </button>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
