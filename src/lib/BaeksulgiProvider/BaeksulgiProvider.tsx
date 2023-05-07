import React from 'react';
import { createContext, useState } from 'react';

type BaeksulgiContextType = {
  isOpen: boolean;
  content: React.ReactNode;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
};

const BaeksulgiContext = createContext<BaeksulgiContextType>({
  isOpen: false,
  content: null,
  openModal: () => {},
  closeModal: () => {},
});

type BaeksulgiProviderProps = {
  children?: React.ReactNode;
};

const BaeksulgiProvider = ({ children }: BaeksulgiProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openModal = (content: React.ReactNode) => {
    setIsOpen(() => true);
    setContent(() => content);
  };

  const closeModal = () => {
    setIsOpen(() => false);
  };

  return (
    <BaeksulgiContext.Provider
      value={{
        isOpen,
        content,
        openModal,
        closeModal,
      }}
    >
      {children}
    </BaeksulgiContext.Provider>
  );
};

export { BaeksulgiContext, BaeksulgiProvider };
