import React, { createContext, useCallback, useContext, useState } from 'react';

import ToastContainer from '../../components/ToastContainer';

const ToastContext = createContext({});

const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addToast = useCallback(({ type, title, position = 'top' }) => {
    const id = String(Math.random());

    const toast = {
      id,
      type,
      title,
      position,
    };

    setMessages(state => [...state, toast]);
  }, []);

  const removeToast = useCallback((id) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
