import React from 'react';

import Toast from './Toast';

import { Container } from './styles';

const ToastContainer = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} id={message.id} type={message.type} title={message.title} position="top" />
      ))}
    </Container>
  );
};

export default ToastContainer;
