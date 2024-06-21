import React, { useState, useEffect } from 'react';

interface ModalProps {
  children: React.ReactNode;
  overlayHeader: boolean;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ children, overlayHeader, isOpen, onClose }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    return onClose;
  }, []);

  return (
    <>
      {isModalOpen && (
        <div
          id="wrapper"
          className={`fixed inset-0 ${
            overlayHeader ? "z-40" : "z-20"
          } h-full bg-gray-100 bg-opacity-30 backdrop-blur-[3px] flex justify-center items-center`}
          onClick={onClose}
        >
          <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
            <div
              className="w-full max-w-sm bg-white shadow-lg rounded-xl"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;