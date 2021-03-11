import React, { useRef, useState } from 'react';

import { Modal } from 'react-native';

import { Overlay, Container } from './styles';

const ModalComponent = ({ children, onCancel }) => {
  const ref = useRef(null);

  const [isVisible, setIsVisible] = useState(true);

  const handleCancel = () => {
    setIsVisible(false);

    onCancel();
  }

  return (
    <Overlay ref={ref} onTouchEnd={() => handleCancel()}>
      <Modal 
        transparent
        visible={isVisible}
        animationType="slide"
      >
        <Container>
          {children}
        </Container>
      </Modal>
    </Overlay>
  );
}

export default ModalComponent;